import faker from '@faker-js/faker';
import { Customer } from '../Types/customer';
import { Diseases } from '../Types/disease';


const defaultFakerAgeOptions = {
  max: 90,
  min: 0,
}

const makeCustomerMock = ({ arrayLength, disease }: { arrayLength: number; disease: Diseases }) => {
  let customerArray = [] as Customer[]
  for (let index = 0; index < arrayLength; index ++) {
    customerArray.push({
      id: faker.datatype.uuid(),
      age: faker.datatype.number(defaultFakerAgeOptions),
      disease,
      mail: faker.internet.email(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`
    } as Customer)
  }

  return customerArray;
};

const makeCustomerWithAlzheimerMock = (arrayLength: number) => makeCustomerMock({ arrayLength, disease: 'Alzheimer' });

const makeCustomerWithAidsMock = (arrayLength: number) => makeCustomerMock({ arrayLength, disease: 'AIDS' });

const makeCustomerWithCancerMock = (arrayLength: number) => makeCustomerMock({ arrayLength, disease: 'Câncer' });

export const mockCustomers = [
  ...makeCustomerWithAlzheimerMock(5),
  ...makeCustomerWithAidsMock(5),
  ...makeCustomerWithCancerMock(5)
].sort(() => Math.random() - 0.5);
