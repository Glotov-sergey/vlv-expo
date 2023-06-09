import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { BlackTitle } from "../../styled/global";

const ProfileReturn = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F0EBE7" }}>
      <ScrollView>
        <BlackTitle>Возврат</BlackTitle>
        <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Optima-cyr",
              lineHeight: 24,
              color: "#F7553D",
            }}
          >
            ЕСЛИ НЕОБХОДИМО ВЕРНУТЬ ТОВАР, КОТОРЫЙ ВЫ ПРИОБРЕЛИ В
            ИНТЕРНЕТ-МАГАЗИНЕ VIVALAVIKA.COM, ВОСПОЛЬЗУЙТЕСЬ ИНФОРМАЦИЕЙ НИЖЕ:
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Optima-cyr",
              lineHeight: 24,
              color: "#F7553D",
              textTransform: "uppercase",
              marginTop: 20,
              marginBottom: 8,
            }}
          >
            Возврат
          </Text>
          <Text style={{ fontFamily: "Circle-regular", lineHeight: 24 }}>
            Вы можете вернуть или обменять товар в случае обнаружения явного
            заводского дефекта в течение 20-ти дней со дня его получения.
            Вернуть товар возможно только в случае, если сохранены его товарный
            вид, потребительские свойства, а также документ, подтверждающий факт
            и условия покупки указанного товара (email или sms подтверждения). В
            течении этого периода Покупатель обязан известить менеджера магазина
            о желании вернуть товар, связавшись удобным для него способом.
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Optima-cyr",
              lineHeight: 24,
              color: "#F7553D",
              textTransform: "uppercase",
              marginTop: 20,
              marginBottom: 8,
            }}
          >
            УСЛОВИЯ ВОЗВРАТА
          </Text>
          <View style={{ gap: 8 }}>
            <Text style={{ fontFamily: "Circle-regular", lineHeight: 24 }}>
              - Товар не был в употреблении
            </Text>
            <Text style={{ fontFamily: "Circle-regular", lineHeight: 24 }}>
              - Сохранен товарный вид и потребительские свойства: на украшении
              нет следов носки, неповрежденная упаковка
            </Text>
            <Text style={{ fontFamily: "Circle-regular", lineHeight: 24 }}>
              - С момента получения товара прошло не более 14 (четырнадцати)
              дней для возвратов по собственному желанию и 20 (двадцати) дней
              ввиду заводского брака.
            </Text>
            <Text style={{ fontFamily: "Circle-regular", lineHeight: 24 }}>
              - По закону мы не сможем принять назад украшение, которое сделали
              для вас по заказу или модифицировали — изменили размер, цвет
              покрытия, гравировку и т.д.
            </Text>
            <Text style={{ fontFamily: "Circle-regular", lineHeight: 24 }}>
              - Вернуть канцтовары и товары для дома возможно в случае
              ненадлежащего качества в период 14 дней со дня получения товара.
              Товары надлежащего качества не подлежат возврату или обмену на
              аналогичный товар, согласно п. 2 ст. 502 Гражданского кодекса РФ.
            </Text>
            <Text style={{ fontFamily: "Circle-regular", lineHeight: 24 }}>
              - Украшения для волос не подлежат возврату.Товар не был в
              употреблении
            </Text>
            <Text style={{ fontFamily: "Circle-regular", lineHeight: 24 }}>
              - Сохранен товарный вид и потребительские свойства: на украшении
              нет следов носки, неповрежденная упаковка
            </Text>
            <Text style={{ fontFamily: "Circle-regular", lineHeight: 24 }}>
              - С момента получения товара прошло не более 14 (четырнадцати)
              дней для возвратов по собственному желанию и 20 (двадцати) дней
              ввиду заводского брака.
            </Text>
            <Text style={{ fontFamily: "Circle-regular", lineHeight: 24 }}>
              - По закону мы не сможем принять назад украшение, которое сделали
              для вас по заказу или модифицировали — изменили размер, цвет
              покрытия, гравировку и т.д.
            </Text>
            <Text style={{ fontFamily: "Circle-regular", lineHeight: 24 }}>
              - Вернуть канцтовары и товары для дома возможно в случае
              ненадлежащего качества в период 14 дней со дня получения товара.
              Товары надлежащего качества не подлежат возврату или обмену на
              аналогичный товар, согласно п. 2 ст. 502 Гражданского кодекса РФ.
              Украшения для волос не подлежат возврату.
            </Text>
          </View>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Optima-cyr",
              lineHeight: 24,
              color: "#F7553D",
              textTransform: "uppercase",
              marginTop: 20,
              marginBottom: 8,
            }}
          >
            КАК ВЕРНУТЬ САМИ УКРАШЕНИЯ?
          </Text>
          <View style={{ gap: 8 }}>
            <Text style={{ fontFamily: "Circle-regular", lineHeight: 24 }}>
              - Для осуществления возврата необходимо связаться с менеджером,
              написав на почту support@vivalavika.com
            </Text>
            <Text style={{ fontFamily: "Circle-regular", lineHeight: 24 }}>
              - В письмо необходимо указать номер вашего заказа, прикрепить чек
              о совершении покупки и детально описать причину возврата.
            </Text>
            <Text style={{ fontFamily: "Circle-regular", lineHeight: 24 }}>
              - Возврат осуществляется за счёт клиента.
            </Text>
            <Text style={{ fontFamily: "Circle-regular", lineHeight: 24 }}>
              - При отправлении возврата необходимо заполнить и вложить
              заявление на возврат.
            </Text>
            <Text style={{ fontFamily: "Circle-regular", lineHeight: 24 }}>
              - После получения возврата офисом, возврат денежных средств с
              нашей стороны осуществляется в течении 2-5 рабочих дней.
            </Text>
          </View>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Optima-cyr",
              lineHeight: 24,
              color: "#F7553D",
              textTransform: "uppercase",
              marginTop: 20,
              marginBottom: 8,
            }}
          >
            КАК ВЕРНУТЬ САМИ УКРАШЕНИЯ?
          </Text>
          <View style={{ gap: 8 }}>
            <Text style={{ fontFamily: "Circle-regular", lineHeight: 24 }}>
              - Вызвать курьера по Москве.Стоимость вызова курьера 440 руб
            </Text>
            <Text style={{ fontFamily: "Circle-regular", lineHeight: 24 }}>
              - Отправить в наш офис. Вы можете прислать украшение в Москву
              любой транспортной компанией. Доставка должна быть осуществлена
              курьером до двери.
            </Text>
            <Text style={{ fontFamily: "Circle-regular", lineHeight: 24 }}>
              - Возврат осуществляется за счёт клиента.
            </Text>
            <Text style={{ fontFamily: "Circle-regular", lineHeight: 24 }}>
              - Привезти в концепт стор. Вы можете лично привезти возврат в наш
              концепт стор в рабочее время
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileReturn;
