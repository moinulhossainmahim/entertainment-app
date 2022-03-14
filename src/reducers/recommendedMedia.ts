import { Action, ActionType, MovieType } from "../actionTypes";

type State = {
  list: MovieType[];
};

const initialState = {
  list: [],
};

const recommendedMediaReducer = (
  state: State = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionType.FETCH_RECOMMENDED:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default recommendedMediaReducer;
