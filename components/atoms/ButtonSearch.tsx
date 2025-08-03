import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity } from "react-native";
import CatFaceIcon from "@/components/icons/CatFaceIcon";

const ButtonSearch = () => {
  return (
    <TouchableOpacity
      className="p-4 w-96 h-14 rounded-full flex flex-row gap-6 items-center justify-center bg-dark-200 "
      activeOpacity={0.9}
    >
      <Text className="font-podkova-semibold text-white font-podkova-bold text-xl text-center">
        Search
      </Text>
    </TouchableOpacity>
  );
};
export default ButtonSearch;
