import styled from "styled-components/native";

export const StyledHomeCategories = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

export const StyledHomeCategoryBlock = styled.TouchableOpacity`
  position: relative;
  height: 163px;
  width: 163px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledHomeCategoryImage = styled.Image`
  position: absolute;
`;

export const StyledHomeCategoryText = styled.Text`
  color: white;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  text-transform: uppercase;
  font-family: "Circle-extrabold";
`;
