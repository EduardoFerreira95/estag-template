import { createCustomer } from "../../App/Services/createCustomer";

describe('CreateCustomer', () => {
  it('should be able to create a customer', () => {
    const customer = createCustomer({
      age: 27,
      disease: 'AIDS',
      mail: 'john-doe@mail.com',
      name: 'John Doe',
    });
    expect(customer.id).toBeTruthy()
    expect(typeof customer.id).toBe("string")
  })
});
