import axios from "axios";
import { Dispatch } from "react";
import { Action, ActionType } from "../actionTypes";

export const fetchSearchMedia =
  (type: string, query: string) => async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOADER,
      payload: { isLoading: true, key: "search" },
    });
    try {
      const {
        data: { results: media_list },
      } = await axios.get(
        `https://api.themoviedb.org/3/search/${type}?api_key=f41ca7cfda77d7a7d04c7c1e517633b9&language=en-US&query=${query}&page=1&include_adult=false`
      );
      dispatch({ type: ActionType.SEARCH_MEDIA, payload: media_list });
    } catch (error: any) {
      dispatch({ type: ActionType.ERROR, payload: error.message });
    }
    dispatch({
      type: ActionType.LOADER,
      payload: { isLoading: false, key: "" },
    });
  };
