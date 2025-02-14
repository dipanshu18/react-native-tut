import { BottomSheetComp } from "@/components/bottom-sheet-comp";
import { ImageCard } from "@/components/image-card";
import { ParallaxScrollView } from "@/components/parallax-scroll-view";
import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

const data = [
  {
    uri: "https://images.unsplash.com/photo-1739381193966-b6cc991c6251?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D",
    name: "Grind",
  },

  {
    uri: "https://images.unsplash.com/photo-1738595634712-a008b400fb1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",
    name: "Sunset",
  },
  {
    uri: "https://images.unsplash.com/photo-1739382445469-c35d08ca4277?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    name: "Deep night",
  },
  {
    uri: "https://images.unsplash.com/photo-1739255269758-cf51fbc723dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
    name: "Office",
  },
  {
    uri: "https://images.unsplash.com/flagged/photo-1575388105878-0ff8d276d368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBnaXJsfGVufDB8fDB8fHww",
    name: "Beach Day",
  },
  {
    uri: "https://images.unsplash.com/photo-1726064855982-02e1c3765b07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    name: "Setup",
  },
];

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
                <ImageCard uri={element.item.uri} />
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
