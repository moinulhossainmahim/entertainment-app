import axios from "axios";
import { Dispatch } from "redux";
import { Action, ActionType } from "../actionTypes";
import { LoaderKeys } from "../reducers/loader";

export const fetchRecommended =
  (media_type: string | undefined, id: string | undefined) =>
  async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOADER,
      payload: { isLoading: true, key: LoaderKeys.RecommendedMedia },
    });
    try {
      const {
        data: { results: recommendedMediaList },
      } = await axios.get(
        `https://api.themoviedb.org/3/${media_type}/${id}/recommendations?api_key=e366d974f73ae203397850eadc7bce1f`
      );
      dispatch({
        type: ActionType.FETCH_RECOMMENDED,
        payload: recommendedMediaList,
      });
      dispatch({
        type: ActionType.LOADER,
        payload: { isLoading: false, key: LoaderKeys.RecommendedMedia },
      });
    } catch (error: any) {
      dispatch({ type: ActionType.ERROR, payload: error.message });
    }
  };
