import { MovieType, Action, ActionType } from "../actionTypes";

interface State {
  movieList: MovieType[];
  isLoading: boolean;
  error: string | null;
}

const initialState = {
  isLoading: false,
  movieList: [],
  error: null,
};

const trendingReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.LOADING:
      return { ...state, isLoading: true };
    case ActionType.END_LOADING:
      return { ...state, isLoading: false };
    case ActionType.FETCH_MOVIES:
      return { ...state, movieList: action.payload };
    default:
      return state;
  }
};

export default trendingReducer;

export type RootState = ReturnType<typeof trendingReducer>;
