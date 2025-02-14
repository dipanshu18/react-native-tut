import { ImageCard } from "@/components/image-card";
import { ParallaxScrollView } from "@/components/parallax-scroll-view";
import { Text, View } from "react-native";

export default function ExplorePage() {
  return (
    <View style={{ flex: 1 }}>
      
      <ParallaxScrollView>
        <ImageCard />
      </ParallaxScrollView>
    </View>
  );
}
