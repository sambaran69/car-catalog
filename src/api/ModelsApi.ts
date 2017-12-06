import fetch from "./fetch";

export default class ModelsApi {

  static async getAllMakers() {
    return fetch("/api/make", null);
  }

  static async getModelsByMakerId(makeId: any) {
    return fetch(`/api/make/${makeId}`, null);
  }

  static async getCarOfTheWeek() {
    return fetch("/api/carOfTheWeek", null);
  }

  static async getModelById(modelId: any) {
    return fetch(`/api/model/${modelId}`, null);
  }

}
