import { ScrollView, Text, View } from "react-native";
import ProjectCard from "@/components/Molecules/ProjectCard";

const ProjectsCard = () => {
  return (
    <View className="flex-1 items-center w-96 bg-dark-100 border border-accent rounded-2xl mb-6">
      <ScrollView
        className="flex-1 bg-dark-100"
        contentContainerStyle={{
          alignItems: "center",
          paddingVertical: 20,
          gap: 16,
        }}
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ScrollView>
    </View>
  );
};

export default ProjectsCard;
