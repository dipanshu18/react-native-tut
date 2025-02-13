import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useRef, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export function ImageCard() {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <Button title="Open sheet" onPress={() => setBottomSheetVisible(true)} />

      {bottomSheetVisible && (
        <BottomSheetComp setBottomSheetVisible={setBottomSheetVisible} />
      )}
    </View>
  );
}

function BottomSheetComp({
  setBottomSheetVisible,
}: {
  setBottomSheetVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <BottomSheet
      style={{ flex: 1 }}
      ref={bottomSheetRef}
      snapPoints={["85%"]}
      enablePanDownToClose
      onClose={() => setBottomSheetVisible(false)}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Text>Awesome 🎉</Text>
      </BottomSheetView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 36,
    backgroundColor: "pink",
    alignItems: "center",
  },
});
