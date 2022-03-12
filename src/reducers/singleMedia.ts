import { Action, ActionType, MovieType } from "../actionTypes";
interface State {
  media: MovieType | null;
  error: string | null;
}

const initialState = {
  media: null,
  error: null,
};

const singleMediaReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_SINGLE_MEDIA:
      return { ...state, media: action.payload };
    default:
      return state;
  }
};

export default singleMediaReducer;
