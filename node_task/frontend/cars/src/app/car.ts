export interface Car {
  name: string;
  mileage: string;
  quarter: string;
  hp:string;
  image: string;
}


export interface CarsResult {
  Q1: Car[];
  Q2: Car[];
  Q3: Car[];
  Q4: Car[];
}
