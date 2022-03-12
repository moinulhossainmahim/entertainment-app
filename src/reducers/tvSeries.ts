import { Action, ActionType, MovieType } from "../actionTypes";
interface State {
  list: MovieType[];
  error: string | null;
}

const initialState = {
  list: [],
  error: null,
};

const tvSeriesReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_TVSERIES:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default tvSeriesReducer;
