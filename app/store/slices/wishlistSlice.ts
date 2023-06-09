import { createSlice } from "@reduxjs/toolkit"
import { IProduct } from "../../types/data/products"

interface IWishlistState {
  wishlistItems: IProduct[]
}

const initialState: IWishlistState = {
  wishlistItems: []
}

const wishlistSlise = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist(state, action) {
      state.wishlistItems.push(action.payload)
    },
    removeFromWishlist(state, action) {
      const removedItem = state.wishlistItems.filter(item => item.id !== action.payload)
      state.wishlistItems = removedItem
    }
  }
})

export const { addToWishlist, removeFromWishlist } = wishlistSlise.actions
export default wishlistSlise.reducer
