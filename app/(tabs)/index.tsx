import { data } from "@/assets/data";
import { BottomSheetComp } from "@/components/bottom-sheet-comp";
import { ImageCard } from "@/components/image-card";
import { ParallaxScrollView } from "@/components/parallax-scroll-view";
import { useState } from "react";
import { FlatList, Pressable, View } from "react-native";

export default function ExplorePage() {
  const [selectedWallpaper, setSelectedWallpaper] = useState<{
    uri: string;
    name: string;
  } | null>(null);

  return (
    <View className="flex-1">
      <View className="flex-1">
        <ParallaxScrollView>
          <FlatList
            data={data}
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
        </ParallaxScrollView>
      </View>
      {selectedWallpaper && (
        <BottomSheetComp
          wallpaper={selectedWallpaper}
          onClose={() => setSelectedWallpaper(null)}
        />
      )}
    </View>
  );
}
