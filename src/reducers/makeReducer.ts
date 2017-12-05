import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function makeReducer(state: any = initialState.makes, action: any) {
  switch (action.type) {
    case types.LOAD_ALL_MAKES:
      return [...state, ...action.makes];
    default:
      return state;
  }
}
