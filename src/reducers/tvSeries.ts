import { MovieType } from "../MediaTypes";

export enum TvSeriesActions {
  TvSeries = "TVSERIES",
}

export interface TvSeriesStore {
  list: MovieType[];
  error: string | null;
}
export interface TvSeriesAction {
  type: TvSeriesActions.TvSeries;
  payload: TvSeriesStore;
}

const initialState: TvSeriesStore = {
  list: [],
  error: null,
};

const tvSeriesReducer = (state = initialState, action: TvSeriesAction) => {
  switch (action.type) {
    case TvSeriesActions.TvSeries:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default tvSeriesReducer;
