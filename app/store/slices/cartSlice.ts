import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { filterConfig } from "react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon"
import { IProduct } from "../../types/data/products"


interface ICartState {
  cartItems: IProduct[]
}

const initialState: ICartState = {
  cartItems: []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<IProduct>) {
      state.cartItems ? state.cartItems.push(action.payload) : state.cartItems
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const filteredItems = state.cartItems.filter(item => item.id !== action.payload)
      state.cartItems = filteredItems
    }
  }
})

export default cartSlice.reducer
export const { addToCart, removeFromCart } = cartSlice.actions
