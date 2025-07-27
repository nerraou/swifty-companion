import ProfileImageAndName from "@/components/Molecules/ProfileImageAndName";
import DetailsCard from "@/components/Molecules/DetailsCard";
import { View } from "react-native";

const ProfileCard = () => {
  return (
    <View className="flex">
      <ProfileImageAndName />
      <DetailsCard />
    </View>
  );
};

export default ProfileCard;
