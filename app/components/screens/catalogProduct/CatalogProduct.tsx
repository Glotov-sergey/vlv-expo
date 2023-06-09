import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
  Animated,
} from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CatalogStackParams } from "../../../navigation/navigation.interface";
import { useQuery } from "react-query";
import { getProductById } from "../../../services/products/products";
import Loader from "../../shared/Loader/Loader";
import { IProductData } from "../../../types/data/products";
import {
  BlackTitle,
  StyledProductPrice,
  StyledProductTitle,
} from "../../styled/global";
import CatalogProductImageSlider from "../../shared/CatalogProductUI/CatalogProductImageSlider";
import Error from "../../ui/Error/Error";
import {
  StyledProductDescription,
  StyledProductSectionTitle,
} from "../../shared/CatalogProductUI/CatalogProductStyled";
import FavouriteIcon from "../../../icons/FavoriteIcon";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { addToCart } from "../../../store/slices/cartSlice";
import { addToWishlist } from "../../../store/slices/wishlistSlice";

type CatalogProductProps = NativeStackScreenProps<
  CatalogStackParams,
  "CatalogProduct"
>;

const CatalogProduct = ({ route }: CatalogProductProps) => {
  const { data, isLoading, isError } = useQuery<IProductData>(
    ["product", route.params.insales_id],
    () => getProductById(route.params.insales_id)
  );

  console.log(data);

  const { width } = Dimensions.get("window");
  const scrollX = useRef(new Animated.Value(0)).current;

  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((state) => state.cart);
  const { wishlistItems } = useAppSelector((state) => state.wishlist);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#F0EBE7",
        flex: 1,
        flexDirection: "column",
        paddingVertical: -20,
      }}
    >
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 10, flexGrow: 1 }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <BlackTitle style={{ marginBottom: 10 }}>
            {data?.product.title}
          </BlackTitle>
          <StyledProductTitle>{data?.product.title}</StyledProductTitle>
          <StyledProductPrice>{data?.product.price} ₽</StyledProductPrice>
        </View>
        <View>
          <CatalogProductImageSlider
            imageUrls={data?.product ? data?.product.images : []}
            width={width}
            scrollX={scrollX}
          />
          <View style={{ marginVertical: 10 }}>
            <Text style={{ marginBottom: 10 }}>Размер</Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#F7553D",
                  borderColor: "#D9D9D9",
                  borderWidth: 0.5,
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                  borderRadius: 12,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Circle-regular",
                    color: "white",
                    fontSize: 16,
                    lineHeight: 24,
                  }}
                >
                  Small
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  borderColor: "#D9D9D9",
                  borderWidth: 0.5,
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                  borderRadius: 8,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Circle-regular",
                    fontSize: 16,
                    lineHeight: 24,
                  }}
                >
                  Standart
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginBottom: 10 }}>
            <StyledProductSectionTitle>Описание</StyledProductSectionTitle>
            <StyledProductDescription>
              {data?.product.description}
            </StyledProductDescription>
          </View>
          <View style={{ marginBottom: 10 }}>
            <StyledProductSectionTitle>Детали</StyledProductSectionTitle>
            <StyledProductDescription>
              {data?.product.material}
            </StyledProductDescription>
          </View>
          <View style={{ marginBottom: 10 }}>
            <StyledProductSectionTitle>Размеры</StyledProductSectionTitle>
            <StyledProductDescription>
              {data?.product.size}
            </StyledProductDescription>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          gap: 8,
          bottom: 0,
          right: 0,
          left: 0,
          height: 70,
          backgroundColor: "#fff",
          flexDirection: "row",
          paddingVertical: 10,
          paddingHorizontal: 15,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            dispatch(addToCart(data?.product));
          }}
          style={{
            backgroundColor: "#F7553D",
            borderRadius: 16,
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Text
            style={{ color: "white", fontFamily: "Circle-bold", fontSize: 16 }}
          >
            {cartItems.includes(data?.product)
              ? "Добавить в корзину ещё один товар"
              : `В корзину ${Number(data?.product.price)}₽`}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={wishlistItems.includes(data?.product)}
          onPress={() => dispatch(addToWishlist(data?.product))}
          style={{
            backgroundColor: `${
              wishlistItems.includes(data.product) ? "#FFECEF" : "transparent"
            }`,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 12,
            borderRadius: 12,
          }}
        >
          <FavouriteIcon
            size={25}
            color={wishlistItems.includes(data?.product) ? "#F7553D" : "#000"}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CatalogProduct;
