import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";

const items = [
  {
    id: 1,
    title: "Item One",
  },
  {
    id: 2,
    title: "Item Two",
  },
  {
    id: 3,
    title: "Item Three",
  },
  {
    id: 4,
    title: "Item For",
  },
];

const DetailsCard = () => {
  return (
    <View className="flex flex-row justify-evenly w-96 p-4 bg-light-100 border-accent border rounded-b-xl">
      {items.map((item) => (
        <View key={item.id} className=" p-2 bg-white rounded-lg shadow">
          <Text className="text-sm">{item.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default DetailsCard;
