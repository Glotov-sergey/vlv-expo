import { View, Text } from "react-native";
import React from "react";

const Error = () => {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 18,
          color: "#F7553D",
          fontFamily: "Circle-extrabold",
        }}
      >
        Произошла ошибка!
      </Text>
    </View>
  );
};

export default Error;
