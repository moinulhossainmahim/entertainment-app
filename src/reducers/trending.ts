import { MovieType } from "../MediaTypes";

export enum TrendingActions {
  Trending = "TRENDING",
}

export interface TrendingStore {
  list: MovieType[];
  error: string | null;
}

export interface TrendingAction {
  type: TrendingActions.Trending;
  payload: TrendingStore;
}

const initialState: TrendingStore = {
  list: [],
  error: null,
};

const trendingReducer = (state = initialState, action: TrendingAction) => {
  switch (action.type) {
    case TrendingActions.Trending:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default trendingReducer;
