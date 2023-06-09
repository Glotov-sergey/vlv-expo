import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlackTitle } from "../../styled/global";

const ProfileAbout = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F0EBE7" }}>
      <BlackTitle>О нас</BlackTitle>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <Image
          style={{ marginBottom: 20 }}
          source={require("../../../static/owner.png")}
        />
        <BlackTitle style={{ maxWidth: 170, marginBottom: 2 }}>
          ВИКТОРИЯ МОЛДАВСКАЯ
        </BlackTitle>
        <Text
          style={{
            textTransform: "uppercase",
            fontFamily: "Circle-bold",
            color: "#F7553D",
          }}
        >
          GIRLBOSS
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileAbout;
