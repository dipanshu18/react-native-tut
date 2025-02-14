import { FontAwesome } from "@expo/vector-icons";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useColorScheme } from "nativewind";
import { useRef } from "react";
import { Image, Pressable, Text, View } from "react-native";

export function BottomSheetComp({
  wallpaper,
  onClose,
}: {
  wallpaper: { uri: string; name: string };
  onClose: () => void;
}) {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const { colorScheme } = useColorScheme();

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={["95%"]}
      enablePanDownToClose
      onClose={onClose}
      handleIndicatorStyle={{ display: "none" }}
      handleStyle={{ display: "none" }}
    >
      <BottomSheetView className="flex-1 rounded-t-xl items-center dark:bg-neutral-950/90">
        <View className="h-[500] w-full">
          <Image
            source={{ uri: wallpaper.uri }}
            className="w-full h-full rounded-xl"
            resizeMode="cover"
          />

          <View className="absolute flex-row justify-between w-full p-3">
            <View>
              <FontAwesome
                onPress={() => bottomSheetRef.current?.close()}
                size={24}
                name="close"
                color={"white"}
              />
            </View>
            <View className="flex-row gap-5">
              <FontAwesome size={24} name="heart" color={"white"} />
              <FontAwesome size={24} name="share-alt-square" color={"white"} />
            </View>
          </View>
        </View>

        <View>
          <Text className="dark:text-white my-2 text-3xl font-extrabold">
            {wallpaper.name}
          </Text>
        </View>

        <View className="w-full px-10">
          <Pressable className="dark:bg-white bg-black flex-row items-center justify-center gap-2 p-5 rounded-xl w-full">
            <FontAwesome
              size={24}
              name="download"
              color={colorScheme === "light" ? "white" : "black"}
            />
            <Text className="text-white dark:text-black font-bold text-xl">
              Download
            </Text>
          </Pressable>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
}
