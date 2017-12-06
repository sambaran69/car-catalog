import modelsApi from "../api/ModelsApi";
import * as types from "./actionTypes";

export const getAllMakers = () => async dispatch => {
  try {
    const makes = await modelsApi.getAllMakers();
    dispatch(getAllMakersSuccess(makes));
  } catch (err) {
    console.log(err);
  }
};

function getAllMakersSuccess(makes: any): types.IMakesAction {
  return {type: types.LOAD_ALL_MAKES, makes};
}
