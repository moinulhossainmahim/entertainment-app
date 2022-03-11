import axios from "axios";
import { Dispatch } from "redux";
import { ActionType, Action } from "../actionTypes";

export const fetchMovies = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.LOADING });
  try {
    const {
      data: { results: movies },
    } = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=f41ca7cfda77d7a7d04c7c1e517633b9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
    );
    dispatch({ type: ActionType.FETCH_MOVIES, payload: movies });
    dispatch({ type: ActionType.END_LOADING });
  } catch (error: any) {
    dispatch({ type: ActionType.ERROR, payload: error.message });
    dispatch({ type: ActionType.END_LOADING });
  }
};

export const fetchSingleMovie =
  (media_type: string | undefined, id: string | undefined) =>
  async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.LOADING });
    try {
      const { data: movie } = await axios.get(
        `https://api.themoviedb.org/3/${media_type}/${id}?api_key=f41ca7cfda77d7a7d04c7c1e517633b9&language=en-US`
      );
      dispatch({ type: ActionType.FETCH_SINGLE_MOVIE, payload: movie });
      dispatch({ type: ActionType.END_LOADING });
    } catch (error: any) {
      dispatch({ type: ActionType.ERROR, payload: error.message });
      dispatch({ type: ActionType.END_LOADING });
    }
  };

export const fetchTrending = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.LOADING });
  try {
    const {
      data: { results: trending },
    } = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=f41ca7cfda77d7a7d04c7c1e517633b9"
    );
    dispatch({ type: ActionType.FETCH_TRENDING, payload: trending });
    dispatch({ type: ActionType.END_LOADING });
  } catch (error: any) {
    dispatch({ type: ActionType.ERROR, payload: error.message });
    dispatch({ type: ActionType.END_LOADING });
  }
};

export const fetchTvSeries = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.LOADING });
  try {
    const {
      data: { results: tvSeries },
    } = await axios.get(
      "https://api.themoviedb.org/3/discover/tv?api_key=f41ca7cfda77d7a7d04c7c1e517633b9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false"
    );
    dispatch({ type: ActionType.FETCH_TVSERIES, payload: tvSeries });
    dispatch({ type: ActionType.END_LOADING });
  } catch (error: any) {
    dispatch({ type: ActionType.ERROR, payload: error.message });
    dispatch({ type: ActionType.END_LOADING });
  }
};
