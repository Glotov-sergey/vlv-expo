import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/data/profile";

interface IAuthState {
  user: IUser | null;
}

const initialState: IAuthState = {
  user: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
