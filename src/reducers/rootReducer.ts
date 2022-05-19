import { combineReducers } from "redux";
import loaderReducer, { LoaderStore } from "./loader";
import movieReducer, { MoviesStore } from "./movies";
import recommendedMediaReducer, { RecommendedStore } from "./recommendedMedia";
import searchReducer, { SearchStore } from "./search";
import singleMediaReducer, { SingleMediaStore } from "./singleMedia";
import trendingReducer, { TrendingStore } from "./trending";
import tvSeriesReducer, { TvSeriesStore } from "./tvSeries";
import genreMediasReducer, { GenresStore } from "./genreMedias";

export interface ReduxStore {
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
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
