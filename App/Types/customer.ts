import { Diseases } from "./disease";

export type CustomerDTO = {
  name: string;
  age: number;
  mail: string;
  disease: Diseases;
}

export type Customer = CustomerDTO & {
  id: string;
}