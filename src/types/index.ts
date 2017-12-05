export interface IMake {
  id: number;
  name: string;
}

export interface IModelProps {
  id: number;
  makeId: number;
  make: IMake;
  name: string;
  price: number;
  imageUrl: string;
}

export interface ICarOfTheWeek {
  modelId: number;
  model: IModelProps;
  review: string;
}
