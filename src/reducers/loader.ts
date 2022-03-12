import { ActionType, Action, LoaderType } from "../actionTypes";

type State = LoaderType;

const initialState = {
  isLoading: true,
  key: "",
};

const loaderReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.LOADER:
      return { state: action.payload };
    default:
      return state;
  }
};

export default loaderReducer;
