export interface DataPersonInterface {
  personId: string;
  firstName: string;
  lastName: string;
  gender: string;
  address: Address;
  phone: string;
  email: string;
  userType: string;
}

interface Address {
  street: string;
  numberStreet: number;
  postCode: number;
}
