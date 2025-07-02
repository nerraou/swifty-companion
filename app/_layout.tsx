import { SplashScreen, Stack } from "expo-router";
import "./globals.css";
import {
  Podkova_400Regular,
  Podkova_500Medium,
  Podkova_600SemiBold,
  Podkova_700Bold,
  Podkova_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/podkova";
import { useEffect } from "react";

export default function RootLayout() {
  let [loaded, error] = useFonts({
    Podkova_400: Podkova_400Regular,
    Podkova_500: Podkova_500Medium,
    Podkova_600: Podkova_600SemiBold,
    Podkova_700: Podkova_700Bold,
    Podkova_800: Podkova_800ExtraBold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <Stack />;
}
