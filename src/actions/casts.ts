import axios from "axios";
import { Dispatch } from "redux";
import { ActionType, Action } from "../actionTypes";
import { LoaderKeys } from "../reducers/loader";

export const fetchCasts =
  (media_type: string | undefined, id: string | undefined) =>
  async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOADER,
      payload: { isLoading: true, key: LoaderKeys.Casts },
    });
    try {
      const {
        data: { cast },
      } = await axios.get(
        `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=f41ca7cfda77d7a7d04c7c1e517633b9`
      );
      dispatch({ type: ActionType.FETCH_CASTS, payload: cast });
    } catch (error: any) {
      dispatch({ type: ActionType.ERROR, payload: error.message });
    }
  };
