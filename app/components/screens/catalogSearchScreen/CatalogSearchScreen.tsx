import { View, Text } from "react-native";
import React from "react";
import CatalogSearch from "../../shared/CatalogSearch/CatalogSearch";
import CatalogLabels from "../../shared/CatalogLabels/CatalogLabels";
import CatalogItems from "../../shared/CatalogItems/CatalogItems";
import CatalogCategories from "../../shared/CatalogCategories/CatalogCategories";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { CatalogStackParams } from "../../../navigation/navigation.interface";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type CatalogSearchProps = NativeStackScreenProps<CatalogStackParams>;

const CatalogSearchScreen = ({ navigation }: CatalogSearchProps) => {
  return (
    <ScrollView style={{ backgroundColor: "#F0EBE7", flex: 1, paddingTop: 60 }}>
      <SafeAreaView>
        <View>
          <CatalogSearch />
          <CatalogLabels />
          <CatalogItems navigation={navigation} />
          <CatalogCategories />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default CatalogSearchScreen;
