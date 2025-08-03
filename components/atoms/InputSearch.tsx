import React from "react";
import { TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

interface InputSearchProps {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
}

const InputSearch = ({
  placeholder = "Search...",
  value,
  onChangeText,
}: InputSearchProps) => {
  return (
    <View className="flex-row items-center px-4 py-2 bg-white rounded-xl space-x-2 border border-dark-200">
      <TextInput
        className="flex-1 text-base text-light-200  "
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#6B7280"
      />
      <Feather name="search" size={20} color="#6B7280" />
    </View>
  );
};

export default InputSearch;
