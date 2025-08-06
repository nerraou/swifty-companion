import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
import Constants from "expo-constants";
import { useState, useEffect } from "react";

WebBrowser.maybeCompleteAuthSession();

// 42 discovery document
const discovery = {
  authorizationEndpoint: "https://api.intra.42.fr/oauth/authorize",
  tokenEndpoint: "https://api.intra.42.fr/oauth/token",
  revocationEndpoint: "https://api.intra.42.fr/oauth/token/revoke",
};

// Pick correct redirect for Expo Go vs standalone
const redirectUri = AuthSession.makeRedirectUri({
  native: "swiftycompanion://oauthredirect",
  path: "oauthredirect",
  scheme: "swiftycompanion",
});

// const redirectUri =
//   "https://auth.expo.io/@nerraou/swiftycompanion/oauthredirect";

type TokenResponse = {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
  created_at: number;
};

export function useAuth42() {
  const { clientId, clientSecret } = Constants.expoConfig?.extra as {
    clientId: string;
    clientSecret: string;
  };

  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId,
      redirectUri,
      scopes: ["public"],
      responseType: AuthSession.ResponseType.Code,
      usePKCE: true,
    },
    discovery,
  );

  const [token, setToken] = useState<TokenResponse | null>(null);

  // ── Exchange the code for an access_token ──────────────────────
  useEffect(() => {
    (async () => {
      if (response?.type !== "success" || !request?.codeVerifier) return;

      const body = new URLSearchParams({
        grant_type: "authorization_code",
        code: response.params.code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        code_verifier: request.codeVerifier,
      }).toString();

      const res = await fetch(discovery.tokenEndpoint!, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (!res.ok) {
        console.error("[42 OAuth] token exchange failed:", await res.text());
        return;
      }

      setToken((await res.json()) as TokenResponse);
    })();
  }, [response, request?.codeVerifier]);

  return { request, promptAsync, token };
}
