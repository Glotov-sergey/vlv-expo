import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppSelector } from "../../../hooks/redux";
import { RootStackParams } from "../../../navigation/navigation.interface";
import CartItems from "../../shared/CartItems/CartItems";
import EmptyCart from "../../shared/EmptyCart/EmptyCart";
import { BlackTitle } from "../../styled/global";

type CartStackScreenProps = NativeStackScreenProps<RootStackParams, "Cart">


const Cart = ({ navigation }: CartStackScreenProps) => {
  const [finalPrice, setFinalPrice] = useState(0)
  const { cartItems } = useAppSelector(state => state.cart)
  useEffect(() => {
    let countedFinalPrice = 0;
    cartItems.forEach((item => {
      countedFinalPrice += item.price
    }))
    setFinalPrice(countedFinalPrice)
  }, [cartItems])
  return (
    <SafeAreaView
      style={{ backgroundColor: "#F0EBE7", flex: 1, paddingTop: 60, height: "100%" }}
    >
      {cartItems.length === 0 ? <EmptyCart navigation={navigation} /> : <ScrollView style={{ flexDirection: 'column' }}>
        <BlackTitle>Корзина</BlackTitle>
        <CartItems />
      </ScrollView>}

      {cartItems.length !== 0 ? <View style={{ position: "absolute", bottom: 0, right: 0, left: 0, height: 100, backgroundColor: "#fff", paddingVertical: 10, paddingHorizontal: 15 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <Text style={{ fontFamily: "Circle-regular", fontSize: 16 }}>Итого к оплате</Text>
          <Text style={{ fontSize: 17, fontFamily: "Circle-bold" }}>{finalPrice} ₽</Text>
        </View>
        <TouchableOpacity style={{ backgroundColor: "#F7553D", borderRadius: 16, alignItems: "center", flex: 1, justifyContent: "center", flexDirection: "row" }}>
          <Text style={{ fontSize: 14, color: "white", fontFamily: "Circle-bold", textTransform: "uppercase" }}>Оформить заказ</Text>
        </TouchableOpacity>
      </View>
        : null}
    </SafeAreaView>
  );
};

export default Cart;
