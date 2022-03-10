import axios from "axios";
import { Dispatch } from "redux";
import { ActionType, Action } from "../actionTypes";

export const fetchTrending = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.LOADING });
  try {
    const {
      data: { results },
    }: any = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=f41ca7cfda77d7a7d04c7c1e517633b9"
    );
    dispatch({ type: ActionType.FETCH_MOVIES, payload: results });
    dispatch({ type: ActionType.END_LOADING });
  } catch (error: any) {
    dispatch({ type: ActionType.ERROR, payload: error.message });
  }
};
