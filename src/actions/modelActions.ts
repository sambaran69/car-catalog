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

function getModelsSuccess(models: any) {
  return { type: types.LOAD_ALL_MODELS_FOR_MAKE, models };
}

export const getCarOfWeek = () => async dispatch => {
  try {
    const carOfWeek = await modelsApi.getCarOfWeek();
    dispatch(getCarOfWeekSuccess(carOfWeek));
    dispatch(getModelById(carOfWeek.modelId));
  } catch (err) {
    console.log(err);
  }
};

function getCarOfWeekSuccess(carOfWeek: any) {
  return { type: types.LOAD_CAR_OF_WEEK, carOfWeek };
}

export const getModelById = (modelId: any) => async dispatch => {
  try {
    const model = await modelsApi.getModelById(modelId);
    dispatch(getModelByIdSuccess(model));
  } catch (err) {
    console.log(err);
  }
};

function getModelByIdSuccess(model: any) {
  return { type: types.LOAD_MODEL_FOR_MODEL_ID, model };
}