import { Person } from './person';

export interface Report {
  coordinator: string;
  oldPerson?: Person;
  volunteer?: Person;
  reportId: string;
  reportDate?: Date;
  reportReference: string;
  summaryVisit: string;
}
