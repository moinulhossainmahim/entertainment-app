import { combineReducers } from "redux";
import loaderReducer from "./loader";
import movieReducer from "./movies";
import searchReducer from "./search";
import singleMediaReducer from "./singleMedia";
import trendingReducer from "./trending";
import tvSeriesReducer from "./tvSeries";

const rootReducer = combineReducers({
  singleMedia: singleMediaReducer,
  tvSeries: tvSeriesReducer,
  trending: trendingReducer,
  movies: movieReducer,
  search: searchReducer,
  loader: loaderReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
