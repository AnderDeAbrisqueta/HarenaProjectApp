import { Injectable } from '@angular/core';
import {
  collectionData,
  Firestore,
  addDoc,
  collection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private firestore: Firestore) {}

  public async addPerson(person: Person) {
    await addDoc(collection(this.firestore, 'persons'), person);
  }

  public getPersons(): Observable<Person[]> {
    return collectionData(collection(this.firestore, 'persons'), {
      idField: 'personId',
    }) as Observable<Person[]>;
  }
}
