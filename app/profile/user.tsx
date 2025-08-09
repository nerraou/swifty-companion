import {View} from "react-native";
import ProfileCard from "@/components/Organisms/ProfileCard";
import ProjectsCard from "@/components/Organisms/ProjectsCard";

const User = () => {
     return (
        <View className="flex-1 p-5 items-center justify-center bg-dark-200 gap-6">
            <ProfileCard />
            <ProjectsCard />
        </View>
    );
}

export default User;