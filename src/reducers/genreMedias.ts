import { Action, ActionType, MovieType } from "./../actionTypes";

interface State {
  list: MovieType[];
  error: string | null;
}

const intialState = {
  list: [],
  error: null,
};

const genreMediasReducer = (state: State = intialState, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_MEDIA_BY_GENRE:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default genreMediasReducer;
