import { Movie, Action, ActionType } from "../actionTypes";

interface State {
  movieList: Movie[];
  isLoading: boolean;
  error: string | null;
}

const initialState = {
  isLoading: false,
  movieList: [],
  error: null,
};

const trendingReducer = (state: State = initialState, action: Action) => {
  return state;
};

export default trendingReducer;

export type RootState = ReturnType<typeof trendingReducer>;
