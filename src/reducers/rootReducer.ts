import { combineReducers } from "redux";
import loaderReducer, { LoaderStore } from "./loader";
import movieReducer, { MoviesStore } from "./movies";
import recommendedMediaReducer, { RecommendedStore } from "./recommendedMedia";
import searchReducer, { SearchStore } from "./search";
import singleMediaReducer, { SingleMediaStore } from "./singleMedia";
import trendingReducer, { TrendingStore } from "./trending";
import tvSeriesReducer, { TvSeriesStore } from "./tvSeries";
import genreMediasReducer, { GenresStore } from "./genreMedias";
import errorReducer, { ErrorStore } from "./error";

export interface ReduxStore {
  error: ErrorStore;
  loader: LoaderStore;
  singleMedia: SingleMediaStore;
  search: SearchStore;
  genreMedias: GenresStore;
  recommended: RecommendedStore;
  movies: MoviesStore;
  trending: TrendingStore;
  tvSeries: TvSeriesStore;
}

const rootReducer = combineReducers({
  genreMedias: genreMediasReducer,
  recommended: recommendedMediaReducer,
  singleMedia: singleMediaReducer,
  tvSeries: tvSeriesReducer,
  trending: trendingReducer,
  movies: movieReducer,
  search: searchReducer,
  loader: loaderReducer,
  error: errorReducer,
});

export default rootReducer;
