import { data } from "@/assets/data";
import { BottomSheetComp } from "@/components/bottom-sheet-comp";
import { ImageCard } from "@/components/image-card";
import { useState } from "react";
import { FlatList, Pressable, View } from "react-native";

export default function SuggestedPage() {
  const [selectedWallpaper, setSelectedWallpaper] = useState<{
    uri: string;
    name: string;
  } | null>(null);

  const suggestedImgs = data.filter((item) => item.suggested === true);

  return (
    <View className="flex-1 dark:bg-black/85">
      <FlatList
        data={suggestedImgs}
        renderItem={(element) => (
          <Pressable
            onPress={() => setSelectedWallpaper(element.item)}
            className="p-5"
          >
            <ImageCard uri={element.item.uri} name={element.item.name} />
          </Pressable>
        )}
        keyExtractor={(item) => item.name}
      />

      {selectedWallpaper && (
        <BottomSheetComp
          wallpaper={selectedWallpaper}
          onClose={() => setSelectedWallpaper(null)}
        />
      )}
    </View>
  );
}
