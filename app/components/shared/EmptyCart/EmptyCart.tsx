import { FC } from "react"
import { SafeAreaView, TouchableOpacity, Text } from "react-native"
import { BlackTitle } from "../../styled/global"
import CartIcon from "../../../icons/CartIcon"
import { StyledEmptyCartContainer } from "./EmptyCartSrtyled"

interface IEmptyCarty {
  navigation: any
}

const EmptyCart: FC<IEmptyCarty> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <StyledEmptyCartContainer>
        <CartIcon size={45} color="#F7553D" />
        <BlackTitle style={{ marginTop: 32 }}>Корзина пуста</BlackTitle>
        <TouchableOpacity style={{ borderWidth: 2, borderColor: "#F7553D", borderRadius: 16, paddingHorizontal: 16, paddingVertical: 8 }} onPress={() => navigation.navigate("Catalog")}>
          <Text style={{ fontFamily: "Circle-bold", textTransform: "uppercase", color: "#F7553D" }}>Перейти в каталог</Text>
        </TouchableOpacity>
      </StyledEmptyCartContainer>
    </SafeAreaView>
  )
}

export default EmptyCart
