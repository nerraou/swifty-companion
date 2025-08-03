import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, ActivityIndicator } from "react-native";
import CatFaceIcon from "@/components/icons/CatFaceIcon";
import { useAuth42 } from "@/auth/42auth";
import { AuthRequestPromptOptions } from "expo-auth-session";

const ButtonLogin = () => {
  const { request, promptAsync, token } = useAuth42(); // get helpers

  /* Trigger browser when the button is pressed */
  const handlePress = () => {
    promptAsync({ useProxy: true } as AuthRequestPromptOptions).catch(
      console.warn,
    );
  };

  /* Show that user is already logged-in (optional) */
  if (token) {
    return <Text className="text-white">Logged in ✔️</Text>;
  }

  return (
    <LinearGradient
      colors={["#D6C7FF", "#CDBAFF", "#AB8BFF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ borderRadius: 6 }}
    >
      <TouchableOpacity
        className="p-4 w-72 h-14 border-dark-100 flex flex-row gap-6 items-center justify-center"
        activeOpacity={0.9}
        disabled={!request} // disable until hook is ready
        onPress={handlePress}
      >
        {request ? <CatFaceIcon /> : <ActivityIndicator color="#000" />}
        <Text className="font-podkova-semibold text-dark-100 text-xl text-center">
          Login
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default ButtonLogin;
