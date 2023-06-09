import { View, Text } from "react-native";
import React, { FC } from "react";
import { newProductsData } from "../../../utils/mocks/newProducts.data";
import HomeNewProductsItem from "./HomeNewProductsItem";
import { FlatList } from "react-native-gesture-handler";
import { RedTitle } from "../../styled/global";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../../navigation/navigation.interface";

type Props = NativeStackScreenProps<RootStackParams, "Home">;

const HomeNewProducts: FC = () => {
  return (
    <View style={{ paddingVertical: 15 }}>
      <RedTitle style={{ paddingBottom: 15 }}>Новинки</RedTitle>
      <FlatList
        data={newProductsData}
        renderItem={({ item }) => <HomeNewProductsItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeNewProducts;
