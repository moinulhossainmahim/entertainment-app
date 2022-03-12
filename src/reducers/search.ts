import { Action, ActionType, MovieType } from "../actionTypes";

interface State {
  media_list: MovieType[];
  error: string | null;
}

const initialState = {
  media_list: [],
  error: null,
};

const searchReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SEARCH_MEDIA:
      return { ...state, media_list: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
