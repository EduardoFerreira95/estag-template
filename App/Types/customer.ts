import { Diseases } from "./disease";

export interface ICustomerDTO {
  name: string;
  age: number;
  mail: string;
  disease: Diseases;
}

export type Customer = ICustomerDTO & {
  id: string;
}
