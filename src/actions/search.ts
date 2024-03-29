import axios from "axios";
import { Dispatch } from "react";
import { LoaderAction, LoaderActions, LoaderKeys } from "../reducers/loader";
import { SearchAction, SearchActions } from "../reducers/search";

export const fetchSearchMedia =
  (type: string, query: string) =>
  async (dispatch: Dispatch<SearchAction | LoaderAction>) => {
    dispatch({
      type: LoaderActions.Loader,
      payload: { isLoading: true, key: LoaderKeys.Search },
    });
    try {
      const {
        data: { results: media_list },
      } = await axios.get(
        `https://api.themoviedb.org/3/search/${type}?api_key=f41ca7cfda77d7a7d04c7c1e517633b9&language=en-US&query=${query}&page=1&include_adult=false`
      );
      dispatch({ type: SearchActions.Search, payload: media_list });
      dispatch({
        type: LoaderActions.Loader,
        payload: { isLoading: false, key: LoaderKeys.Search },
      });
    } catch (error: any) {
      // dispatch({ type: ActionType.ERROR, payload: error.message });
    }
  };
