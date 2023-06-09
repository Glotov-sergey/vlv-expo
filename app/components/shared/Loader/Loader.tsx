import { FC, useEffect, useRef } from "react";
import { Text, View, Animated, StyleSheet } from "react-native";

const SIZE = 100;

const Loader: FC = () => {
  const progress = useRef(new Animated.Value(0.5)).current;
  const scale = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.spring(progress, { toValue: 1, useNativeDriver: true }),
          Animated.spring(progress, { toValue: 0.5, useNativeDriver: true }),
        ]),

        Animated.sequence([
          Animated.spring(scale, { toValue: 1.4, useNativeDriver: true }),
          Animated.spring(scale, { toValue: 1, useNativeDriver: true }),
        ]),
      ])
    ).start();
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.loader,
          {
            borderRadius: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [SIZE / 4, SIZE / 2],
            }),
            opacity: progress,
          },
        ]}
      >
        <Text style={{ fontFamily: "Optima", fontSize: 22, color: "white" }}>
          VLV
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#F0EBE7",
  },
  loader: {
    width: SIZE,
    height: SIZE,
    backgroundColor: "#F7553D",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loader;
