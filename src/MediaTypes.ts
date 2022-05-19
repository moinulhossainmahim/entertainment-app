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
