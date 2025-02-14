import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useRef, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export function ImageCard() {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>


      <Pressable onPress={() => setBottomSheetVisible(true)}>
      <Image 
        source={{
          uri: "https://images.unsplash.com/photo-1739382445469-c35d08ca4277?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          
        }}
        style={{
          aspectRatio: 16/9,
        }}
        
        
      />
      </Pressable>

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
