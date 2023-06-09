import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "../store/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
