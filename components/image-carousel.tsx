import { window } from "@/constants/sizes";
import { renderItem } from "@/utils/render-item";
import { View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";

const defaultDataWith6Colors = ["#B0604D", "#899F9C", "#B3C680", "#5C6265"];

export function ImageCarousel(props) {
  const progress = useSharedValue<number>(0);

  return (
    <View
      {...props}
      id="carousel-component"
      dataSet={{ kind: "basic-layouts", name: "parallax" }}
    >
      <Carousel
        autoPlayInterval={2000}
        data={defaultDataWith6Colors}
        height={500}
        loop={true}
        pagingEnabled={true}
        snapEnabled={true}
        width={window.width}
        style={{
          width: window.width,
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        onProgressChange={progress}
        renderItem={renderItem({ rounded: true })}
      />
    </View>
  );
}
