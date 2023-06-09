import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { BlackTitle } from "../../styled/global";

const ProfileRecomendations = () => {
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#F0EBE7" }}>
      <ScrollView>
        <BlackTitle>РЕКОМЕНДАЦИЯ ПО УХОДУ</BlackTitle>
        <View style={{ paddingHorizontal: 10 }}>
          <Text
            style={{
              fontFamily: "Circle-regular",
              fontSize: 14,
              lineHeight: 24,
            }}
          >
            Все наши украшения - уникальны, именно поэтому мы советуем следовать
            базовому гиду по уходу, который поможет продлить жизнь вашему
            изделию:
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 10,
            paddingLeft: 20,
            marginVertical: 15,
            gap: 8,
          }}
        >
          <Text
            style={{
              fontFamily: "Circle-regular",
              fontSize: 14,
              lineHeight: 24,
            }}
          >
            - Избегайте прямого контакта с водой, парфюмом, кремом, лосьоном или
            любым химическим продуктом.
          </Text>
          <Text
            style={{
              fontFamily: "Circle-regular",
              fontSize: 14,
              lineHeight: 24,
            }}
          >
            - Снимайте ваше украшение перед купанием (и в море, и в ванной :),
            баней и любимыми активностями, которые подразумевают под собой
            контакт с химическими или грубыми продуктами (например, гантели или
            любой спортивный инвентарь).
          </Text>
          <Text
            style={{
              fontFamily: "Circle-regular",
              fontSize: 14,
              lineHeight: 24,
            }}
          >
            - Храните изделие в сухом месте.
          </Text>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <Text
            style={{
              fontFamily: "Circle-regular",
              fontSize: 14,
              lineHeight: 24,
            }}
          >
            Для надежного хранения мы доставляем все изделия в нашей фирменной
            коробке или упаковке бренда. Пожалуйста, используйте эту упаковку
            для хранения, пока не носите украшение на себе.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileRecomendations;
