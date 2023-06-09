import { View, Text } from "react-native";
import React, { FC } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../../navigation/navigation.interface";

type Props = NativeStackScreenProps<RootStackParams, "Product">;

const Product = ({ route }: Props) => {
  return (
    <View>
      <Text>{route.params.id}</Text>
    </View>
  );
};

export default Product;
