import { Action, ActionType, MovieType } from "../actionTypes";
interface State {
  movieList: MovieType[];
  isLoading: boolean;
  error: string | null;
  singleMovie: MovieType | null;
}

const initialState = {
  movieList: [],
  isLoading: true,
  error: null,
  singleMovie: null,
};

const movieReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.LOADING:
      return { ...state, isLoading: true };
    case ActionType.END_LOADING:
      return { ...state, isLoading: false };
    case ActionType.FETCH_MOVIES:
      return { ...state, movieList: action.payload };
    case ActionType.FETCH_SINGLE_MOVIE:
      return { ...state, singleMovie: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
