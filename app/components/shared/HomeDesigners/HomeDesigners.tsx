import { View, Text } from "react-native";
import React from "react";
import { RedTitle } from "../../styled/global";
import { FlatList } from "react-native-gesture-handler";
import HomeDesignersItem from "./HomeDesignersItem";

const HomeDesigners = () => {
  return (
    <View style={{ paddingVertical: 15 }}>
      <RedTitle>Дизайнеры</RedTitle>
      {/* <FlatList */}
      {/*   style={{ paddingTop: 20 }} */}
      {/*   data={designersData} */}
      {/*   renderItem={({ item }) => <HomeDesignersItem item={item} />} */}
      {/*   horizontal */}
      {/*   showsHorizontalScrollIndicator={false} */}
      {/* /> */}
    </View>
  );
};

export default HomeDesigners;
