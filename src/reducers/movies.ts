import { MovieType } from "../MediaTypes";

export enum MoviesActions {
  Movies = "Movies",
}

export interface MoviesStore {
  list: MovieType[];
  error: string | null;
}

export interface MoviesAction {
  type: MoviesActions.Movies;
  payload: MoviesStore;
}

const initialState: MoviesStore = {
  list: [],
  error: null,
};

const movieReducer = (state = initialState, action: MoviesAction) => {
  switch (action.type) {
    case MoviesActions.Movies:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
