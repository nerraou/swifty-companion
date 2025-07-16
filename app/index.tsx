import { Text, View } from "react-native";
import ButtonLogin from "@/components/atoms/ButtonLogin";
import Icon42 from "@/components/icons/Icon42";

function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-primary gap-16">
      <Icon42 />
      <ButtonLogin />
    </View>
  );
}

export default Index;
