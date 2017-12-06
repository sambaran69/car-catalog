import modelsApi from "../api/ModelsApi";
import * as types from "./actionTypes";

export const getModels = (makerId: any) => async dispatch => {
  try {
    const models = await modelsApi.getModelsByMakerId(makerId);
    dispatch(getModelsSuccess(models));
  } catch (err) {
    console.log(err);
  }
};

function getModelsSuccess(models: any): types.IModelsAction {
  return { type: types.LOAD_ALL_MODELS_FOR_MAKE, models };
}

export const getCarOfWeek = () => async dispatch => {
  try {
    const carOfTheWeek = await modelsApi.getCarOfTheWeek();
    dispatch(getCarOfWeekSuccess(carOfTheWeek));
    dispatch(getModelById(carOfTheWeek.modelId));
  } catch (err) {
    console.log(err);
  }
};

function getCarOfWeekSuccess(carOfTheWeek: any): types.ICarOfTheWeekAction {
  return { type: types.LOAD_CAR_OF_WEEK, carOfTheWeek };
}

export const getModelById = (modelId: any) => async dispatch => {
  try {
    const model = await modelsApi.getModelById(modelId);
    dispatch(getModelByIdSuccess(model));
  } catch (err) {
    console.log(err);
  }
};

function getModelByIdSuccess(model: any): types.IModelAction {
  return { type: types.LOAD_MODEL_FOR_MODEL_ID, model };
}
