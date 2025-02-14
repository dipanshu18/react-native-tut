import { Dimensions, StyleSheet, View } from "react-native";
import Animated, {
	interpolate,
	useAnimatedRef,
	useAnimatedStyle,
	useScrollViewOffset
} from 'react-native-reanimated';
import { ImageCarousel } from "./image-carousel";

interface IParallaxProps {
  children: React.ReactNode
}

const {width} = Dimensions.get("window");
const IMG_HEIGHT = 500;

export function ParallaxScrollView({children}: IParallaxProps) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
	const scrollOffset = useScrollViewOffset(scrollRef);

	const imageAnimatedStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateY: interpolate(
						scrollOffset.value,
						[-IMG_HEIGHT, 0, IMG_HEIGHT],
						[-IMG_HEIGHT, 0, IMG_HEIGHT * 0.75]
					)
				},
				{
					scale: interpolate(scrollOffset.value, [-IMG_HEIGHT, 0, IMG_HEIGHT], [2, 1, 1])
				}
			]
		};
	});

  return <View className="flex-1">
  <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16} className="flex-1">
    <ImageCarousel style={[styles.image, imageAnimatedStyle]} />
    <View className="flex-1 bg-neutral-200">
    {children}
    </View>
  </Animated.ScrollView>
  </View>
}

const styles = StyleSheet.create({
	image: {
		width,
		height: IMG_HEIGHT
	}
});