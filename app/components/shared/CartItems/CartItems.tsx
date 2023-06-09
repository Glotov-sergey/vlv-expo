import { FC } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux"
import TrashIcon from "../../../icons/TrashIcon"
import { removeFromCart } from "../../../store/slices/cartSlice"


const CartItems: FC = () => {
  const dispatch = useAppDispatch()
  const { cartItems } = useAppSelector(state => state.cart)
  return (<View style={{ paddingHorizontal: 10, gap: 15 }}>
    {cartItems.map(item => (
      <View key={item.id} style={{ flexDirection: "row", gap: 15 }}>
        <Image source={{ uri: item.images[2] }} style={{ height: 120, width: 120, borderRadius: 16 }} />
        <View style={{ flex: 1 }}>
          <Text style={{ fontFamily: "Optima-cyr", maxWidth: 150, fontSize: 16, lineHeight: 24 }}>{item.title}</Text>
          <Text style={{ fontFamily: "Circle-regular", color: "rgba(39, 24, 21, 0.6)", marginTop: 5 }}>{item.material}</Text>
          <View style={{ borderWidth: 1, flexDirection: "row", justifyContent: "space-between", width: "70%", alignItems: "center", borderColor: "#F7553D", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 16, marginTop: 5 }}>
            <TouchableOpacity onPress={() => dispatch(removeFromCart(item.id))} >
              <TrashIcon size={20} color="#F7553D" />
            </TouchableOpacity>
            <Text style={{ fontFamily: "Circle-bold", fontSize: 16, color: "#F7553D" }}>1</Text>
            <TouchableOpacity style={{ transform: [{ translateY: -2 }] }}>
              <Text style={{ color: "#F7553D", fontSize: 25 }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{ fontSize: 17, fontFamily: "Circle-bold" }}>{item.price} ₽</Text>
      </View>
    ))}
  </View>)
}

export default CartItems
