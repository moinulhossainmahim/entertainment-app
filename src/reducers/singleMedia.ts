import { Action, ActionType, MovieType } from "../actionTypes";
interface State {
  media: MovieType | null;
  isLoading: boolean;
  error: string | null;
}

const initialState = {
  media: null,
  isLoading: true,
  error: null,
};

const singleMediaReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.LOADING:
      return { ...state, isLoading: true };
    case ActionType.END_LOADING:
      return { ...state, isLoading: false };
    case ActionType.FETCH_SINGLE_MEDIA:
      return { ...state, media: action.payload };
    default:
      return state;
  }
};

export default singleMediaReducer;
