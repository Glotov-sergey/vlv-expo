import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import AddToFavouriteIcon from "../../../icons/AddToFavouriteIcon";
import {
  StyledHomeNewProductsItemContainer,
  StyledNewProductItemTitle,
  StyledNewProductsItemBrand,
  StyledNewProductsItemFavourite,
  StyledNewProductsItemPrice,
} from "./HomeNewProductsStyled";

interface IHomeNewProductsProps {
  item: any;
}

const HomeNewProductsItem: FC<IHomeNewProductsProps> = ({ item }) => {
  return (
    <TouchableOpacity>
      <StyledHomeNewProductsItemContainer>
        <StyledNewProductsItemFavourite>
          <AddToFavouriteIcon color="#CBC8C7" />
        </StyledNewProductsItemFavourite>
        <Image style={{ marginBottom: 4 }} source={item.imageUrl} />
        <StyledNewProductsItemBrand>{item.brand}</StyledNewProductsItemBrand>
        <StyledNewProductItemTitle>{item.title}</StyledNewProductItemTitle>
        <StyledNewProductsItemPrice>{item.price} ₽</StyledNewProductsItemPrice>
      </StyledHomeNewProductsItemContainer>
    </TouchableOpacity>
  );
};

export default HomeNewProductsItem;
