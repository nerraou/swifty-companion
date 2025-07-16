import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity } from "react-native";
import CatIcon from "@/components/icons/CatIcon";

const ButtonLogin = () => {
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
      >
        <CatIcon />
        <Text className="font-podkova-semibold text-dark-100 text-xl text-center">
          Login
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};
export default ButtonLogin;
