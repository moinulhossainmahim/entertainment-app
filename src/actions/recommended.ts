import axios from "axios";
import { Dispatch } from "redux";
import { LoaderAction, LoaderActions, LoaderKeys } from "../reducers/loader";
import {
  RecommendedAction,
  RecommendedActions,
} from "../reducers/recommendedMedia";

export const fetchRecommended =
  (media_type: string | undefined, id: string | undefined) =>
  async (dispatch: Dispatch<RecommendedAction | LoaderAction>) => {
    dispatch({
      type: LoaderActions.Loader,
      payload: { isLoading: true, key: LoaderKeys.RecommendedMedia },
    });
    try {
      const {
        data: { results: recommendedMediaList },
      } = await axios.get(
        `https://api.themoviedb.org/3/${media_type}/${id}/recommendations?api_key=e366d974f73ae203397850eadc7bce1f`
      );
      dispatch({
        type: RecommendedActions.Recommended,
        payload: recommendedMediaList,
      });
      dispatch({
        type: LoaderActions.Loader,
        payload: { isLoading: false, key: LoaderKeys.RecommendedMedia },
      });
    } catch (error: any) {
      /*  dispatch({ type: ActionType.ERROR, payload: error.message }); */
    }
  };
