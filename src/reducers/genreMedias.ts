import { MovieType } from "../MediaTypes";

export enum GenresActions {
  Genres = "GENRES",
}

export interface GenresStore {
  list: MovieType[];
}

export interface GenresAction {
  type: GenresActions.Genres;
  payload: GenresStore;
}

const intialState: GenresStore = {
  list: [],
};

const genreMediasReducer = (state = intialState, action: GenresAction) => {
  switch (action.type) {
    case GenresActions.Genres:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default genreMediasReducer;
