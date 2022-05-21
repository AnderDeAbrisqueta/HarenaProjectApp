export interface Person {
  personId: string;
  imageUrl?: string;
  firstName: string;
  lastName: string;
  gender: string;
  address: Address;
  phone: string;
  email?: string;
  userType: string;
  description?: string;
  personAtending?: string;
  oldPersonAditionalInfo?: OldPersonInfo;
}

interface Address {
  street: string;
  numberStreet: number;
  postCode: number;
}

interface OldPersonInfo {
  hasChildren?: boolean;
  childrenNumber?: number;
  civilStatus?: string;
  hasHelpTownHall?: boolean;
  helpTownHallType?: [];
  hasPsychologicalHelp?: boolean;
  treatment?: [];
  observations?: string;
}
