import { MovieType } from "../MediaTypes";

export enum SingleMediaActions {
  SingleMedia = "SINGLE_MEDIA",
}

export interface SingleMediaStore {
  media: MovieType | null;
  error: string | null;
}

export interface SingleMediaAction {
  type: SingleMediaActions.SingleMedia;
  payload: SingleMediaStore;
}

const initialState: SingleMediaStore = {
  media: null,
  error: null,
};

const singleMediaReducer = (
  state = initialState,
  action: SingleMediaAction
) => {
  switch (action.type) {
    case SingleMediaActions.SingleMedia:
      return { ...state, media: action.payload };
    default:
      return state;
  }
};

export default singleMediaReducer;
