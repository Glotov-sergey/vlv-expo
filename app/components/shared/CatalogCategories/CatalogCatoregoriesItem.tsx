import { View, Text } from "react-native";
import React, { FC } from "react";
import ArrowRight from "../../../icons/ArrowRight";
import {
  StyledCatalogCategoryItem,
  StyledCatalogCategoryItemText,
} from "./CatalogCategoriesStyled";

interface ICatalogCategoriesItemProps {
  text: string;
}

const CatalogCatoregoriesItem: FC<ICatalogCategoriesItemProps> = ({ text }) => {
  return (
    <StyledCatalogCategoryItem>
      <StyledCatalogCategoryItemText>{text}</StyledCatalogCategoryItemText>
      <ArrowRight />
    </StyledCatalogCategoryItem>
  );
};

export default CatalogCatoregoriesItem;
