import { SlideItem } from "@/components/slide-item";
import type { ImageStyle, StyleProp } from "react-native";
import type { CarouselRenderItem } from "react-native-reanimated-carousel";

interface Options {
  rounded?: boolean;
  style?: StyleProp<ImageStyle>;
}

export const renderItem =
  ({ rounded = false, style }: Options = {}): CarouselRenderItem<any> =>
  ({ index }: { index: number }) =>
    <SlideItem key={index} index={index} rounded={rounded} style={style} />;
