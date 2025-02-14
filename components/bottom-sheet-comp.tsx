import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { Image, Text, View } from "react-native";

export function BottomSheetComp({
  wallpaper,
  onClose,
}: {
  wallpaper: { uri: string; name: string };
  onClose: () => void;
}) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={["90%"]}
      enablePanDownToClose
      onClose={onClose}
      handleIndicatorStyle={{ display: "none" }}
      handleStyle={{ display: "none" }}
    >
      <BottomSheetView className="flex-1 items-center">
        <View className="h-[600] w-full">
          <Image
            source={{ uri: wallpaper.uri }}
            style={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
            resizeMode="cover"
          />
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
}
