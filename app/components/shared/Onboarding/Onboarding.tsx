import { FC, useRef } from "react";
import { Animated, FlatList, View } from "react-native";
import { slidesData } from "../../../utils/mocks/slides.data";
import OnboardingItem from "./OnboardingItem";
import Paginator from "./Paginator";

const Onboarding: FC = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  return (
    <View>
      <FlatList
        data={slidesData}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        pagingEnabled
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        ref={slidesRef}
        showsHorizontalScrollIndicator={false}
      />
      <Paginator items={slidesData} scrollX={scrollX} />
    </View>
  );
};

export default Onboarding;
