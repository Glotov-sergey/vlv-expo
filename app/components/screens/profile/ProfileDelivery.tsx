import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlackTitle } from "../../styled/global";
import ProfileDeliveryItem from "../../shared/ProfileDeliveryItem/ProfileDeliveryItem";
import { ScrollView } from "react-native-gesture-handler";

const ProfileDelivery = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F0EBE7" }}>
      <ScrollView>
        <BlackTitle>Доставка</BlackTitle>
        <View style={{ marginHorizontal: 10 }}>
          <ProfileDeliveryItem
            title="ДОСТАВКА ПО МОСКВЕ И МО"
            content={[
              "Доставка осуществляется в течение 1-3 рабочих дней со дня оформления заказа.",
              "Доставка за МКАД осуществляется при 100% оплате заказа на сайте. (Стоимость доставки за МКАД рассчитывается автоматически)",
              "Стоимость доставки по Москве в пределах МКАД - 440 рублей.",
              "При заказе от 10.000 рублей - доставка БЕСПЛАТНАЯ! (ТОЛЬКО В ПРЕДЕЛАХ МКАДа)",
              "Срочная доставка по Москве в пределах МКАД ежедневно с 10:00 до 21:00 - 600 рублей.",
              "При изменении адреса в день доставки, доставка переносится на следующий день.",
              "В случае отказа от заказа, оплачивается только доставка.",
            ]}
          />
          <ProfileDeliveryItem
            title="ДОСТАВКА ПО РОССИИ, БЕЛАРУСИ И КАЗАХСТАНУ"
            content={[
              "Доставка осуществляется в течение 1-3 рабочих дней со дня оформления заказа.",
              "Доставка за МКАД осуществляется при 100% оплате заказа на сайте. (Стоимость доставки за МКАД рассчитывается автоматически)",
              "Стоимость доставки по Москве в пределах МКАД - 440 рублей.",
              "При заказе от 10.000 рублей - доставка БЕСПЛАТНАЯ! (ТОЛЬКО В ПРЕДЕЛАХ МКАДа)",
              "Срочная доставка по Москве в пределах МКАД ежедневно с 10:00 до 21:00 - 600 рублей.",
              "При изменении адреса в день доставки, доставка переносится на следующий день.",
              "В случае отказа от заказа, оплачивается только доставка.",
            ]}
          />
          <ProfileDeliveryItem
            title="ДОСТАВКА ПО МИРУ"
            content={[
              "Доставка осуществляется в течение 1-3 рабочих дней со дня оформления заказа.",
              "Доставка за МКАД осуществляется при 100% оплате заказа на сайте. (Стоимость доставки за МКАД рассчитывается автоматически)",
              "Стоимость доставки по Москве в пределах МКАД - 440 рублей.",
              "При заказе от 10.000 рублей - доставка БЕСПЛАТНАЯ! (ТОЛЬКО В ПРЕДЕЛАХ МКАДа)",
              "Срочная доставка по Москве в пределах МКАД ежедневно с 10:00 до 21:00 - 600 рублей.",
              "При изменении адреса в день доставки, доставка переносится на следующий день.",
              "В случае отказа от заказа, оплачивается только доставка.",
            ]}
          />
          <ProfileDeliveryItem
            title="САМОВЫВОЗ"
            content={[
              "Доставка осуществляется в течение 1-3 рабочих дней со дня оформления заказа.",
              "Доставка за МКАД осуществляется при 100% оплате заказа на сайте. (Стоимость доставки за МКАД рассчитывается автоматически)",
              "Стоимость доставки по Москве в пределах МКАД - 440 рублей.",
              "При заказе от 10.000 рублей - доставка БЕСПЛАТНАЯ! (ТОЛЬКО В ПРЕДЕЛАХ МКАДа)",
              "Срочная доставка по Москве в пределах МКАД ежедневно с 10:00 до 21:00 - 600 рублей.",
              "При изменении адреса в день доставки, доставка переносится на следующий день.",
              "В случае отказа от заказа, оплачивается только доставка.",
            ]}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileDelivery;
