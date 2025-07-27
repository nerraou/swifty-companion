import { Text, View } from "react-native";

const ProjectCard = () => {
  return (
    <View className="flex flex-row justify-evenly bg-white w-full rounded-lg p-4">
      <Text className="text-dark-200 font-podkova-bold">Projects</Text>
      <Text className="text-dark-200 font-podkova-normal">1 year ago</Text>
      <Text className="text-dark-200 font-podkova-normal">100</Text>
    </View>
  );
};

export default ProjectCard;
