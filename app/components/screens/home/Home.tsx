import {
  View,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import {
  StyledHomeCategories,
  StyledHomeCategoryBlock,
  StyledHomeCategoryText,
  StyledHomeCategoryImage,
} from "../../shared/HomeCategories/HomeCategoriesStyled";
import { ScrollView } from "react-native-gesture-handler";
import HomeBanner from "../../shared/HomeBanner/HomeBanner";
import HomeCompanyBrands from "../../shared/HomeCompanyBrands/HomeCompanyBrands";
import HomeDesigners from "../../shared/HomeDesigners/HomeDesigners";
import HomeNewProducts from "../../shared/HomeNewProducts/HomeNewProducts";
import HomePopular from "../../shared/HomePopular/HomePopular";
import HomeScrollHeader from "../../shared/HomeScrolledHeader/HomeScrollHeader";
import { FC, useState } from "react";

const Home: FC = () => {
  const [scrollY] = useState(new Animated.Value(0));

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    scrollY.setValue(offsetY);
  };

  return (
    <>
      <HomeScrollHeader scrollY={scrollY} />
      <ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={{ backgroundColor: "#F0EBE7" }}
      >
        <HomeBanner />
        <View style={{ paddingTop: 24 }}>
          <StyledHomeCategories>
            <StyledHomeCategoryBlock>
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

        <HomeDesigners />
        <HomeNewProducts />
        <HomePopular />
        <HomeCompanyBrands />
      </ScrollView>
    </>
  );
};

export default Home;
