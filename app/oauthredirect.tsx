import { useEffect } from "react";
import { router, useLocalSearchParams } from "expo-router";

export default function OAuthRedirect() {

    const { code, state } = useLocalSearchParams<{
        code?: string;
        state?: string;
    }>();



    useEffect(() => {
        router.replace("/profile/user");
    }, []);

    return null;
}