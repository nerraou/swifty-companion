import { Text, View } from "react-native";
import ButtonLogin from "@/components/atoms/ButtonLogin";
import Icon42 from "@/components/icons/Icon42";
import CatFaceIcon from "@/components/icons/CatFaceIcon";
import CatIcon from "@/components/icons/CatIcon";
import ProfileImageAndName from "@/components/Molecules/ProfileImageAndName";
import ProfileCard from "@/components/Organisms/ProfileCard";
import ProjectsCard from "@/components/Organisms/ProjectsCard";
import ButtonSearch from "@/components/atoms/ButtonSearch";
import InputSearch from "@/components/atoms/InputSearch";
import { useState } from "react";

function Index() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View className="flex-1 p-5 items-center justify-center bg-dark-200 gap-6">
      <Icon42 />
      {/*<InputSearch*/}
      {/*  value={searchQuery}*/}
      {/*  onChangeText={setSearchQuery}*/}
      {/*  placeholder="Search items..." // optional*/}
      {/*/>*/}

      {/*<ButtonSearch />*/}
      <ButtonLogin />
      {/*<ProfileCard />*/}
      {/*<ProjectsCard />*/}
    </View>
  );
}

export default Index;
