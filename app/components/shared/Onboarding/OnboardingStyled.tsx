import styled from "styled-components/native";

export const StyledOnboardingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StyledOnboardingImage = styled.Image`
  flex: 0.7;
  justify-content: center;
`;

export const StyledOnboardingTitle = styled.Text`
  font-size: 24px;
  line-height: 32px;
  font-family: "Optima-cyr";
  text-transform: uppercase;
  padding-bottom: 49px;
  color: white;
  text-align: center;
`;

export const StyledDotsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  transform: translateY(-30px);
`;
