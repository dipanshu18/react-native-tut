import { Image, View } from "react-native";

export function ImageCard({uri}: {uri: string}) {

  return (
    <View className="rounded-md">
      <Image 
        className="rounded-xl w-full h-[400]"
        source={{
          uri
        }}
      />
    </View>
  );
}

