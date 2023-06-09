import styled from "styled-components/native";

export const RedTitle = styled.Text`
  font-family: "Optima-cyr";
  color: #f7553d;
  text-align: center;
  text-transform: uppercase;
  font-size: 24px;
  line-height: 32px;
`;

export const BlackTitle = styled.Text`
  font-family: "Optima-cyr";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #271815;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const StyledProductContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
`;

export const StyledProductImage = styled.Image`
  border-width: 1px;
  border-color: #e5e3e3;
  border-radius: 21px;
  width: 176px;
  height: 176px;
  background: gray;
  margin-bottom: 10px;
`;

export const StyledProductBrand = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #271815;
  font-family: "Optima-cyr";
  text-transform: uppercase;
`;

export const StyledProductTitle = styled.Text`
  font-size: 12px;
  line-height: 16px;
  color: #271815;
  max-width: 175px;
  text-align: center;
  margin-bottom: 4px;
  color: rgba(39, 24, 21, 0.6);
`;

export const StyledProductPrice = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: #271815;
  margin-top: auto;
  font-family: "Optima-cyr";
`;
