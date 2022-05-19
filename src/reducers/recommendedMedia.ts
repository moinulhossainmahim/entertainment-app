import { MovieType } from "../MediaTypes";

export enum RecommendedActions {
  Recommended = "RECOMMENDED",
}

export interface RecommendedStore {
  list: MovieType[];
}

export interface RecommendedAction {
  type: RecommendedActions.Recommended;
  payload: RecommendedStore;
}

const initialState: RecommendedStore = {
  list: [],
};

const recommendedMediaReducer = (
  state = initialState,
  action: RecommendedAction
) => {
  switch (action.type) {
    case RecommendedActions.Recommended:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default recommendedMediaReducer;
