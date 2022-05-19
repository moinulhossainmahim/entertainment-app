import axios from "axios";
import { Dispatch } from "redux";
import { ActionType, Action } from "../actionTypes";
import { LoaderKeys } from "../reducers/loader";

export const fetchMedia =
  (mediaType: string) => async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOADER,
      payload: {
        isLoading: true,
        key: mediaType === "movie" ? LoaderKeys.Movies : LoaderKeys.TvSeries,
      },
    });
    try {
      const {
        data: { results: media },
      } = await axios.get(
        `https://api.themoviedb.org/3/discover/${mediaType}?api_key=f41ca7cfda77d7a7d04c7c1e517633b9&include_adult=false&include_video=false`
      );
      dispatch({
        type:
          mediaType === "movie"
            ? ActionType.FETCH_MOVIES
            : ActionType.FETCH_TVSERIES,
        payload: media,
      });
      dispatch({
        type: ActionType.LOADER,
        payload: {
          isLoading: false,
          key: mediaType === "movie" ? LoaderKeys.Movies : LoaderKeys.TvSeries,
        },
      });
    } catch (error: any) {
      dispatch({ type: ActionType.ERROR, payload: error.message });
    }
  };

export const fetchSingleMedia =
  (media_type: string | undefined, id: string | undefined) =>
  async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOADER,
      payload: { isLoading: true, key: LoaderKeys.SingleMedia },
    });
    try {
      const { data: movie } = await axios.get(
        `https://api.themoviedb.org/3/${media_type}/${id}?api_key=f41ca7cfda77d7a7d04c7c1e517633b9&language=en-US&append_to_response=videos`
      );
      dispatch({ type: ActionType.FETCH_SINGLE_MEDIA, payload: movie });
      dispatch({
        type: ActionType.LOADER,
        payload: { isLoading: false, key: LoaderKeys.SingleMedia },
      });
    } catch (error: any) {
      dispatch({ type: ActionType.ERROR, payload: error.message });
    }
  };

export const fetchTrending = () => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.LOADER,
    payload: { isLoading: true, key: LoaderKeys.Trending },
  });
  try {
    const {
      data: { results: trending },
    } = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=f41ca7cfda77d7a7d04c7c1e517633b9"
    );
    dispatch({ type: ActionType.FETCH_TRENDING, payload: trending });
    dispatch({
      type: ActionType.LOADER,
      payload: { isLoading: false, key: LoaderKeys.Trending },
    });
  } catch (error: any) {
    dispatch({ type: ActionType.ERROR, payload: error.message });
  }
};

export const fetchMediaByGenres =
  (
    media_type: string | undefined,
    id: string | undefined,
    sort: string | undefined
  ) =>
  async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOADER,
      payload: { isLoading: true, key: LoaderKeys.GenreMedias },
    });
    try {
      const {
        data: { results: mediasByGenre },
      } = await axios.get(
        `https://api.themoviedb.org/3/discover/${media_type}?api_key=f41ca7cfda77d7a7d04c7c1e517633b9&with_genres=${id}&sort_by=${sort}`
      );
      dispatch({
        type: ActionType.FETCH_MEDIA_BY_GENRE,
        payload: mediasByGenre,
      });
      dispatch({
        type: ActionType.LOADER,
        payload: { isLoading: false, key: LoaderKeys.GenreMedias },
      });
    } catch (error: any) {
      dispatch({ type: ActionType.ERROR, payload: error.message });
    }
  };
