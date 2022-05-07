import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../model/person';

@Pipe({
  name: 'searchPerson',
})
export class SearchPersonPipe implements PipeTransform {
  transform(person: Person[], text: string): Person[] {
    if (text.length === 0) {
      return person;
    }

    text = text.toLocaleLowerCase();

    return person.filter((persons) => {
      return (
        persons.firstName.toLocaleLowerCase().includes(text) ||
        persons.lastName.toLocaleLowerCase().includes(text)
      );
    });
  }
}
