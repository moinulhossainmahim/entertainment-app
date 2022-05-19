export enum LoaderActions {
  Loader = "LOADER",
}

export enum LoaderKeys {
  Trending = "trending",
  Movies = "movies",
  TvSeries = "tvSeries",
  SingleMedia = "singleMedia",
  Search = "search",
  RecommendedMedia = "recommendedMedia",
  Casts = "casts",
  GenreMedias = "genreMedias",
}

export interface LoaderStore {
  isLoading: true | false;
  key: string;
}

export interface LoaderAction {
  type: LoaderActions.Loader;
  payload: LoaderStore;
}

const initialState: LoaderStore = {
  isLoading: false,
  key: "",
};

const loaderReducer = (state = initialState, action: LoaderAction) => {
  switch (action.type) {
    case LoaderActions.Loader:
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
