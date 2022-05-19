import axios from "axios";
import { Dispatch } from "redux";
import { GenresAction, GenresActions } from "../reducers/genreMedias";
import { LoaderAction, LoaderActions, LoaderKeys } from "../reducers/loader";
import { MoviesAction, MoviesActions } from "../reducers/movies";
import { SingleMediaAction, SingleMediaActions } from "../reducers/singleMedia";
import { TrendingAction, TrendingActions } from "../reducers/trending";
import { TvSeriesAction, TvSeriesActions } from "../reducers/tvSeries";

export const fetchMedia =
  (mediaType: string) =>
  async (dispatch: Dispatch<TvSeriesAction | MoviesAction | LoaderAction>) => {
    dispatch({
      type: LoaderActions.Loader,
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
            ? MoviesActions.Movies
            : TvSeriesActions.TvSeries,
        payload: media,
      });
      dispatch({
        type: LoaderActions.Loader,
        payload: {
          isLoading: false,
          key: mediaType === "movie" ? LoaderKeys.Movies : LoaderKeys.TvSeries,
        },
      });
    } catch (error: any) {
      // dispatch({ type: ActionType.ERROR, payload: error.message });
    }
  };

export const fetchSingleMedia =
  (media_type: string | undefined, id: string | undefined) =>
  async (dispatch: Dispatch<SingleMediaAction | LoaderAction>) => {
    dispatch({
      type: LoaderActions.Loader,
      payload: { isLoading: true, key: LoaderKeys.SingleMedia },
    });
    try {
      const { data: movie } = await axios.get(
        `https://api.themoviedb.org/3/${media_type}/${id}?api_key=f41ca7cfda77d7a7d04c7c1e517633b9&language=en-US&append_to_response=videos`
      );
      dispatch({ type: SingleMediaActions.SingleMedia, payload: movie });
      dispatch({
        type: LoaderActions.Loader,
        payload: { isLoading: false, key: LoaderKeys.SingleMedia },
      });
    } catch (error: any) {
      // dispatch({ type: ActionType.ERROR, payload: error.message });
    }
  };

export const fetchTrending =
  () => async (dispatch: Dispatch<TrendingAction | LoaderAction>) => {
    dispatch({
      type: LoaderActions.Loader,
      payload: { isLoading: true, key: LoaderKeys.Trending },
    });
    try {
      const {
        data: { results: trending },
      } = await axios.get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=f41ca7cfda77d7a7d04c7c1e517633b9"
      );
      dispatch({ type: TrendingActions.Trending, payload: trending });
      dispatch({
        type: LoaderActions.Loader,
        payload: { isLoading: false, key: LoaderKeys.Trending },
      });
    } catch (error: any) {
      // dispatch({ type: ActionType.ERROR, payload: error.message });
    }
  };

export const fetchMediaByGenres =
  (
    media_type: string | undefined,
    id: string | undefined,
    sort: string | undefined
  ) =>
  async (dispatch: Dispatch<GenresAction | LoaderAction>) => {
    dispatch({
      type: LoaderActions.Loader,
      payload: { isLoading: true, key: LoaderKeys.GenreMedias },
    });
    try {
      const {
        data: { results: mediasByGenre },
      } = await axios.get(
        `https://api.themoviedb.org/3/discover/${media_type}?api_key=f41ca7cfda77d7a7d04c7c1e517633b9&with_genres=${id}&sort_by=${sort}`
      );
      dispatch({
        type: GenresActions.Genres,
        payload: mediasByGenre,
      });
      dispatch({
        type: LoaderActions.Loader,
        payload: { isLoading: false, key: LoaderKeys.GenreMedias },
      });
    } catch (error: any) {
      // dispatch({ type: ActionType.ERROR, payload: error.message });
    }
  };
