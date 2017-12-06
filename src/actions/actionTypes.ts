export const LOAD_ALL_MAKES = "LOAD_ALL_MAKES";

export const LOAD_ALL_MODELS_FOR_MAKE = "LOAD_ALL_MODELS_FOR_MAKE";
export const LOAD_CAR_OF_WEEK = "LOAD_CAR_OF_WEEK";
export const LOAD_MODEL_FOR_MODEL_ID = "LOAD_MODEL_FOR_MODEL_ID";

export interface IModelsAction {
  type: any,
  models: any[],
}

export interface IModelAction {
  type: any,
  model: any[],
}

export interface IMakesAction {
  type: any,
  makes: any[],
}

export interface IMakeAction {
  type: any,
  make: any[],
}

export interface ICarOfTheWeekAction {
  type: any,
  carOfTheWeek: any,
}
