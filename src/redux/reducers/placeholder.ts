import {
  GET_PLACEHOLDER_ERROR,
  GET_PLACEHOLDER_PENDING,
  GET_PLACEHOLDER_SUCCESS,
} from "../actions";
import { Action, PlaceholderState } from "../types";

const initialState: PlaceholderState = {
  data: [],
  isLoadingGetPlaceholder: false,
  listPlaceholder: [],
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case GET_PLACEHOLDER_PENDING:
      return { ...state, isLoadingGetPlaceholder: true };
    case GET_PLACEHOLDER_SUCCESS:
      return {
        ...state,
        isLoadingGetPlaceholder: false,
        listPlaceholder: payload.data,
      };
    case GET_PLACEHOLDER_ERROR:
      return { ...state, isLoadingGetPlaceholder: false };

    default:
      return state;
  }
};
