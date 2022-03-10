import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../reducers/movies";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
