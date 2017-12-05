import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const initValues = {
  models: [],
  carOfWeek: {},
  currentModelDetail: {},
};

export default function modelReducer(state: any = initValues, action: any) {
  switch (action.type) {
    case types.LOAD_ALL_MODELS_FOR_MAKE:
      return {...state, models: action.models};
    case types.LOAD_CAR_OF_WEEK:
      return {...state, carOfWeek: action.carOfWeek};
    case types.LOAD_MODEL_FOR_MODEL_ID:
      return {...state, currentModelDetail: action.model};
    default:
      return state;
  }
}
