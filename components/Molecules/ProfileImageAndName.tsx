import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const ProfileImageAndName = () => {
  return (
    <View className="flex flex-row p-4 gap-6  bg-dark-100 w-96 border-accent border rounded-t-xl">
      <Image
        style={styles.image}
        source={require("../../assets/images/img.png")}
        contentFit="cover"
        transition={1000}
      />
      <View>
        <Text className="text-white font-podkova-extrabold">
          Erraou Nouhayla
        </Text>
        <Text className="font-podkova-normal text-light-100">nerraou</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 1,
    borderColor: "#000000", // gray-300 equivalent
  },
});

export default ProfileImageAndName;
