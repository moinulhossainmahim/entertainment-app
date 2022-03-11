export interface MovieType {
  poster_path: string;
  release_date: string;
  vote_average: number;
  title: string;
  id: number;
  original_title: string;
  media_type: string;
  original_name: string;
  first_air_date: string;
  overview: string;
  tagline: string;
}

export enum ActionType {
  LOADING = "LOADING",
  FETCH_MOVIES = "FETCH_MOVIES",
  ERROR = "ERROR",
  END_LOADING = "END_LOADING",
  FETCH_SINGLE_MOVIE = "FETCH_SINGLE_MOVIE",
  FETCH_TRENDING = "FETCH_TRENDING",
  FETCH_TVSERIES = "FETCH_TVSERIES",
}

interface loading {
  type: ActionType.LOADING | ActionType.END_LOADING;
}
interface fetchMovies {
  type:
    | ActionType.FETCH_MOVIES
    | ActionType.FETCH_TRENDING
    | ActionType.FETCH_TVSERIES;
  payload: MovieType[];
}

interface failFetching {
  type: ActionType.ERROR;
  payload: string;
}

interface fetchSingleMovie {
  type: ActionType.FETCH_SINGLE_MOVIE;
  payload: MovieType;
}

export type Action = loading | fetchMovies | failFetching | fetchSingleMovie;
