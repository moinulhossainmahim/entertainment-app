interface GenreType {
  id: number;
  name: string;
}

interface Results {
  id: string;
  key: string;
  site: string;
  type: string;
}
export interface Video {
  results: Results[];
}
export interface Cast {
  cast_id: number;
  id: number;
  name: string;
  profile_path: string;
  original_name: string;
}

export interface MovieType {
  poster_path: string;
  release_date: string;
  vote_average: number;
  imdb_id: string;
  title: string;
  id: number;
  original_title: string;
  media_type: string;
  original_name: string;
  first_air_date: string;
  overview: string;
  tagline: string;
  homepage: string;
  genres: GenreType[];
  videos: Video;
}
export interface LoaderType {
  isLoading: true | false;
  key: string;
}

export enum ActionType {
  LOADER = "LOADER",
  FETCH_MOVIES = "FETCH_MOVIES",
  ERROR = "ERROR",
  FETCH_SINGLE_MEDIA = "FETCH_SINGLE_MEDIA",
  FETCH_TRENDING = "FETCH_TRENDING",
  FETCH_TVSERIES = "FETCH_TVSERIES",
  SEARCH_MEDIA = "SEARCH_MEDIA",
  FETCH_RECOMMENDED = "FETCH_RECOMMENDED",
  FETCH_CASTS = "FETCH_CASTS",
}

interface loading {
  type: ActionType.LOADER;
  payload: LoaderType;
}

interface fetchMovies {
  type:
    | ActionType.FETCH_MOVIES
    | ActionType.FETCH_TRENDING
    | ActionType.FETCH_TVSERIES
    | ActionType.SEARCH_MEDIA
    | ActionType.FETCH_RECOMMENDED;
  payload: MovieType[];
}

interface failFetching {
  type: ActionType.ERROR;
  payload: string;
}

interface fetchSingleMovie {
  type: ActionType.FETCH_SINGLE_MEDIA;
  payload: MovieType;
}

interface fetchCasts {
  type: ActionType.FETCH_CASTS;
  payload: Cast[];
}

export type Action =
  | loading
  | fetchMovies
  | failFetching
  | fetchSingleMovie
  | fetchCasts;
