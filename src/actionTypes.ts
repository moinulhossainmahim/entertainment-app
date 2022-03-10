export interface MovieType {
  poster_path: string;
  vote_count: number;
  overview: string;
  release_date: string;
  video: boolean;
  vote_average: number;
  adult: boolean;
  backdrop_path: string;
  title: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  popularity: number;
  media_type: string;
}

export enum ActionType {
  LOADING = "LOADING",
  FETCH_MOVIES = "FETCH_MOVIES",
  ERROR = "ERROR",
  END_LOADING = "END_LOADING",
}

interface loading {
  type: ActionType.LOADING;
}

interface endLoading {
  type: ActionType.END_LOADING;
}
interface fetchMovies {
  type: ActionType.FETCH_MOVIES;
  payload: MovieType[];
}

interface failFetching {
  type: ActionType.ERROR;
  payload: string;
}

export type Action = loading | fetchMovies | failFetching | endLoading;
