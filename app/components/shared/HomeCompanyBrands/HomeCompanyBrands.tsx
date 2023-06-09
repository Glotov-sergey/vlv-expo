import { View, Text } from "react-native";
import React from "react";
import { RedTitle } from "../../styled/global";
import { FlatList } from "react-native-gesture-handler";
import { newProductsData } from "../../../utils/mocks/newProducts.data";
import HomeNewProductsItem from "../HomeNewProducts/HomeNewProductsItem";

const HomeCompanyBrands = () => {
  return (
    <View style={{ paddingVertical: 15 }}>
      <RedTitle style={{ marginBottom: 10 }}>VILA LA VIKA</RedTitle>
      <FlatList
        data={newProductsData}
        renderItem={({ item }) => <HomeNewProductsItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeCompanyBrands;
