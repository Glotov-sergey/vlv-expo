import { View } from "react-native";
import {
  StyledHomeCategories,
  StyledHomeCategoryBlock,
  StyledHomeCategoryImage,
  StyledHomeCategoryText,
} from "./HomeCategoriesStyled";

const HomeCategories = ({ navigation }: any) => {
  return (
    <View style={{ paddingTop: 24 }}>
      <StyledHomeCategories>
        <StyledHomeCategoryBlock onPress={() => navigation.navigate("CatalogScreenStack", { screen: "CatalogProducts", params: { category: "КОЛЬЦА" } })} >
          <StyledHomeCategoryImage
            source={require("../../../static/home-category-1.png")}
          />
          <StyledHomeCategoryText>Кольца</StyledHomeCategoryText>
        </StyledHomeCategoryBlock>
        <StyledHomeCategoryBlock>
          <StyledHomeCategoryImage
            source={require("../../../static/home-category-2.png")}
          />
          <StyledHomeCategoryText>Серьги</StyledHomeCategoryText>
        </StyledHomeCategoryBlock>
        <StyledHomeCategoryBlock>
          <StyledHomeCategoryImage
            source={require("../../../static/home-category-3.png")}
          />
          <StyledHomeCategoryText>Браслеты</StyledHomeCategoryText>
        </StyledHomeCategoryBlock>
        <StyledHomeCategoryBlock>
          <StyledHomeCategoryImage
            source={require("../../../static/home-category-4.png")}
          />
          <StyledHomeCategoryText>Колье</StyledHomeCategoryText>
        </StyledHomeCategoryBlock>
      </StyledHomeCategories>
    </View>
  );
};

export default HomeCategories;
