import { Dispatch } from "../types";
import { API } from "../../configs";

// get seasons
export const GET_PLACEHOLDER_PENDING = "GET_PLACEHOLDER_PENDING";
export const GET_PLACEHOLDER_SUCCESS = "GET_PLACEHOLDER_SUCCESS";
export const GET_PLACEHOLDER_ERROR = "GET_PLACEHOLDER_ERROR";

export const getPlaceholder = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_PLACEHOLDER_PENDING });
    const res = await API.getPlaceholder();
    dispatch({
      type: GET_PLACEHOLDER_SUCCESS,
      payload: { data: res.data },
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: GET_PLACEHOLDER_ERROR,
        payload: { data: err.response },
      });
    } else {
      dispatch({ type: GET_PLACEHOLDER_ERROR, payload: { data: err } });
    }
  }
};
