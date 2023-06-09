import { FC } from "react";
import { Animated, StyleSheet, useWindowDimensions, View } from "react-native";
import { ISlide } from "../../../utils/mocks/slides.data";
import { StyledDotsContainer } from "./OnboardingStyled";

interface IPaginator {
  items: ISlide[];
  scrollX: any;
}

const Paginator: FC<IPaginator> = ({ items, scrollX }) => {
  const { width } = useWindowDimensions();

  return (
    <StyledDotsContainer>
      {items.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, opacity }]}
            key={i.toString()}
          ></Animated.View>
        );
      })}
    </StyledDotsContainer>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    marginHorizontal: 5,
  },
});
