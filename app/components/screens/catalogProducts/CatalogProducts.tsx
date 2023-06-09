import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CatalogStackParams } from "../../../navigation/navigation.interface";
import { useQuery } from "react-query";
import { getProductByCategory } from "../../../services/products/products";
import { IProductsData } from "../../../types/data/products";
import {
  BlackTitle,
  StyledProductBrand,
  StyledProductContainer,
  StyledProductImage,
  StyledProductPrice,
  StyledProductTitle,
} from "../../styled/global";
import Loader from "../../shared/Loader/Loader";
import Error from "../../ui/Error/Error";
import FilterIcon from "../../../icons/Filter";

type CatalogProductsProps = NativeStackScreenProps<
  CatalogStackParams,
  "CatalogProducts"
>;

const CatalogProducts = ({ navigation, route }: CatalogProductsProps) => {
  const { status, data, isLoading, isError } = useQuery<IProductsData>(
    ["category_products", route.params.collection_id],
    () => getProductByCategory(route.params.collection_id),
    { staleTime: 10 * 1000, cacheTime: 0 }
  );

  console.log(data);

  if (status === "loading") {
    return <Loader />;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <ScrollView style={{ backgroundColor: "#F0EBE7", flex: 1, paddingTop: 40 }}>
      <SafeAreaView>
        <BlackTitle style={{ marginBottom: 10 }}>
          {data?.collection.title}
        </BlackTitle>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            gap: 20,
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <ScrollView horizontal style={{ gap: 10 }}>
            <View
              style={{
                backgroundColor: "white",
                marginRight: 4,
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 8,
              }}
            >
              <Text style={{ fontSize: 16, fontFamily: "Circle-regular" }}>
                Small (15)
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "white",
                marginRight: 4,
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 8,
              }}
            >
              <Text style={{ fontSize: 16, fontFamily: "Circle-regular" }}>
                Medium (20)
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "white",
                marginRight: 4,
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 8,
              }}
            >
              <Text style={{ fontSize: 16, fontFamily: "Circle-regular" }}>
                Large (23)
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "white",
                marginRight: 4,
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 8,
              }}
            >
              <Text style={{ fontSize: 16, fontFamily: "Circle-regular" }}>
                Small
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "white",
                marginRight: 4,
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 8,
              }}
            >
              <Text style={{ fontSize: 16, fontFamily: "Circle-regular" }}>
                Small
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "white",
                marginRight: 4,
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 8,
              }}
            >
              <Text style={{ fontSize: 16, fontFamily: "Circle-regular" }}>
                Small
              </Text>
            </View>
          </ScrollView>
          <FilterIcon size={25} color="#000" />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            columnGap: 8,
            rowGap: 10,
          }}
        >
          {data?.catalog.map((product) => (
            <StyledProductContainer
              onPress={() => {
                navigation.push("CatalogProduct", {
                  insales_id: product.id,
                });
              }}
              key={product.id}
            >
              <StyledProductImage source={{ uri: product.images[0] }} />
              <StyledProductBrand>{product.brand}</StyledProductBrand>
              <StyledProductTitle>{product.title}</StyledProductTitle>
              <StyledProductPrice>{product.price} ₽</StyledProductPrice>
            </StyledProductContainer>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default CatalogProducts;
