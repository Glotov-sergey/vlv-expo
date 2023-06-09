import styled from "styled-components/native";

export const StyledHomeNewProductsItemContainer = styled.View`
  position: relative;
  margin-right: 5px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledNewProductsItemFavourite = styled.View`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 20;
`;

export const StyledNewProductsItemBrand = styled.Text`
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  color: #271815;
  font-family: "Optima";
`;

export const StyledNewProductItemTitle = styled.Text`
  font-size: 12px;
  line-height: 16px;
  color: rgba(39, 24, 21, 0.6);
`;

export const StyledNewProductsItemPrice = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: rgba(39, 24, 21, 0.8);
`;
