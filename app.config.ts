import "dotenv/config";
import type { ExpoConfig } from "@expo/config-types";
import { ConfigContext } from "@expo/config";

export default (_: ConfigContext): ExpoConfig => ({
  name: "swiftycompanion",
  slug: "swiftycompanion",
  owner: "nerraou",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "swiftycompanion",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,

  ios: {
    supportsTablet: true,
  },

  android: {
    package: "com.nerraou.swiftycompanion",

    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    edgeToEdgeEnabled: true,
  },

  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },

  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
    ],
    "expo-web-browser",
  ],

  experiments: {
    typedRoutes: true,
  },

  extra: {
    clientId: process.env.EXPO_PUBLIC_42_CLIENT_ID,
    clientSecret: process.env.EXPO_PUBLIC_42_CLIENT_SECRET,
    eas: {
      projectId: "5fd3c421-24de-4254-a2bf-3b081ee537bf",
    },
  },
});
