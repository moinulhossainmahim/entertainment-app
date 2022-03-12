import { Action, ActionType, MovieType } from "../actionTypes";

interface State {
  isLoading: boolean;
  media_list: MovieType[];
  error: string | null;
}

const initialState = {
  isLoading: true,
  media_list: [],
  error: null,
};

const searchReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.LOADING:
      return { ...state, isLoading: true };
    case ActionType.END_LOADING:
      return { ...state, isLoading: false };
    case ActionType.SEARCH_MEDIA:
      return { ...state, media_list: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
