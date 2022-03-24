import { ActionType, Action, LoaderType } from "../actionTypes";

export enum LoaderKeys {
  Trending = "trending",
  Movies = "movies",
  TvSeries = "tvSeries",
  SingleMedia = "singleMedia",
  Search = "search",
  RecommendedMedia = "recommendedMedia",
  Casts = "casts",
}

type State = LoaderType;

const initialState = {
  isLoading: true,
  key: "",
};

const loaderReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.LOADER:
      return {
        ...state,
        key: action.payload.key,
        isLoading: action.payload.isLoading,
      };
    default:
      return state;
  }
};

export default loaderReducer;
