import { customerServices } from "../../App/Services/CustomerService";
import { mockCustomers } from "../../App/Mocks/customer";

describe('CreateCustomer', () => {
  it('should be able to create a customer', () => {
    const customer = customerServices.create({
      age: 27,
      disease: 'AIDS',
      mail: 'john-doe@mail.com',
      name: 'John Doe',
    });
    expect(customer.id).toBeTruthy()
    expect(typeof customer.id === 'string').toBe(true)
    expect(mockCustomers.includes(customer)).toBe(true)
  })
});
