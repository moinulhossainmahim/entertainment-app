import { MovieType } from "../MediaTypes";

export enum SearchActions {
  Search = "SEARCH",
}

export interface SearchStore {
  media_list: MovieType[];
  error: string | null;
}

export interface SearchAction {
  type: SearchActions.Search;
  payload: SearchStore;
}

const initialState: SearchStore = {
  media_list: [],
  error: null,
};

const searchReducer = (state = initialState, action: SearchAction) => {
  switch (action.type) {
    case SearchActions.Search:
      return { ...state, media_list: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
