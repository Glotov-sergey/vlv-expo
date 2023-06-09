import { FC } from "react";
import { Animated, TouchableOpacity, StyleSheet } from "react-native";

interface ICatalogProductImageSliderProps {
  imageUrls: string[];
  width: number;
  scrollX: any;
}

const CatalogProductImageSlider: FC<ICatalogProductImageSliderProps> = ({
  imageUrls,
  width,
  scrollX,
}) => {
  // Image slider consants
  const s = width * 0.8;
  const ITEM_WIDTH = s;
  const ITEM_HEIGHT = 311;
  const SPACING = 8;
  const FULL_SIZE = s + SPACING * 2;
  // -----------

  return (
    <Animated.FlatList
      data={imageUrls}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={FULL_SIZE}
      decelerationRate="fast"
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: true }
      )}
      renderItem={({ item, index }) => {
        const inputRange = [
          (index - 1) * FULL_SIZE,
          index * FULL_SIZE,
          (index + 1) * FULL_SIZE,
        ];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [1, 1.05, 1],
        });
        const radius = scrollX.interpolate({
          inputRange,
          outputRange: [30, 10, 30],
        });
        return (
          <TouchableOpacity
            style={{
              width: ITEM_WIDTH,
              height: ITEM_HEIGHT,
              margin: SPACING,
            }}
            onPress={() => {}}
          >
            <Animated.Image
              source={{ uri: item }}
              style={[
                StyleSheet.absoluteFillObject,
                {
                  resizeMode: "cover",
                  transform: [{ scale }],
                  borderRadius: radius,
                },
              ]}
            />
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default CatalogProductImageSlider;
