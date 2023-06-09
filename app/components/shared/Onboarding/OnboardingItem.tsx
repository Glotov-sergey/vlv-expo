import { FC } from "react";
import { View, Image, useWindowDimensions } from "react-native";
import { ISlide } from "../../../utils/mocks/slides.data";
import {
  StyledOnboardingImage,
  StyledOnboardingTitle,
} from "./OnboardingStyled";

interface IOnboardingItemProps {
  item: ISlide;
}

const OnboardingItem: FC<IOnboardingItemProps> = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        width,
        flex: 1,
        position: "relative",
        height: 565,
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <StyledOnboardingImage
        source={item.imageUrl}
        style={{
          width,
          resizeMode: "cover",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          height: "100%",
        }}
      />
      <View style={{ paddingBottom: 45 }}>
        <StyledOnboardingTitle>{item.title}</StyledOnboardingTitle>
      </View>
    </View>
  );
};

export default OnboardingItem;
