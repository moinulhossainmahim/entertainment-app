import { combineReducers } from "redux";
import castReducer from "./casts";
import loaderReducer from "./loader";
import movieReducer from "./movies";
import recommendedMediaReducer from "./recommendedMedia";
import searchReducer from "./search";
import singleMediaReducer from "./singleMedia";
import trendingReducer from "./trending";
import tvSeriesReducer from "./tvSeries";
import genreMediasReducer from "./genreMedias";

const rootReducer = combineReducers({
  genreMedias: genreMediasReducer,
  recommended: recommendedMediaReducer,
  singleMedia: singleMediaReducer,
  tvSeries: tvSeriesReducer,
  trending: trendingReducer,
  movies: movieReducer,
  search: searchReducer,
  loader: loaderReducer,
  casts: castReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
