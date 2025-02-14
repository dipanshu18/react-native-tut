import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";

export function ImageCard({uri, name}: {uri: string, name: string}) {

  return (
    <View className="rounded-md">
      <Image 
        className="rounded-xl w-full h-[400]"
        source={{
          uri
        }}
      />

      <View className="absolute bottom-0 p-5 flex-row items-center justify-between w-full  rounded-b-xl bg-neutral-950/40">
      <Text className="text-white font-extrabold text-2xl">{name}</Text>
      <View>
        <FontAwesome size={20} name="heart" color={"white"} />
      </View>
      </View>
    </View>
  );
}
