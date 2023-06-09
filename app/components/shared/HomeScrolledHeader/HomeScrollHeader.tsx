import { Text, View, Animated, Easing } from "react-native";
import React, { FC } from "react";

interface IHeader {
  scrollY: any;
}

const HomeScrollHeader: FC<IHeader> = ({ scrollY }) => {
  const backgroundAnimation = scrollY.interpolate({
    inputRange: [0, 1],
    outputRange: ["transparent", "#F0EBE7"],
    extrapolate: "clamp",
    easing: Easing.ease,
    duration: 1000,
  });
  const textAnimation = scrollY.interpolate({
    inputRange: [0, 1],
    outputRange: ["#fff", "#F7553D"],
    extrapolate: "clamp",
    easing: Easing.ease,
    duration: 10000,
  });
  const borderColorAnimation = scrollY.interpolate({
    inputRange: [0, 1],
    outputRange: ["transparent", "#D8D2CE"],
    extrapolate: "clamp",
    easing: Easing.ease,
  });
  return (
    <Animated.View
      style={{
        position: "absolute",
        zIndex: 20,
        paddingTop: 50,
        paddingBottom: 20,
        justifyContent: "center",
        flexDirection: "row",
        width: "100%",
        backgroundColor: backgroundAnimation,
        borderBottomWidth: 1,
        borderBottomColor: borderColorAnimation,
      }}
    >
      <Animated.View style={{}}>
        <Animated.Text
          style={{
            marginHorizontal: "auto",
            textAlign: "center",
            fontSize: 28,
            letterSpacing: -0.8,
            color: textAnimation,
            fontFamily: "Optima",
          }}
        >
          VIVA LA VIKA
        </Animated.Text>
      </Animated.View>
    </Animated.View>
  );
};

export default HomeScrollHeader;
