import { Action, ActionType, MovieType } from "../actionTypes";
interface State {
  list: MovieType[];
  isLoading: boolean;
  error: string | null;
}

const initialState = {
  list: [],
  isLoading: true,
  error: null,
};

const movieReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.LOADING:
      return { ...state, isLoading: true };
    case ActionType.END_LOADING:
      return { ...state, isLoading: false };
    case ActionType.FETCH_MOVIES:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
