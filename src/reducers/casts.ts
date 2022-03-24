import { Action, ActionType, Cast } from "../actionTypes";

interface State {
  casts: Cast[];
  error: string | null;
}

const initialState = {
  casts: [],
  error: null,
};

const castReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_CASTS:
      return { ...state, casts: action.payload };
    default:
      return state;
  }
};

export default castReducer;
