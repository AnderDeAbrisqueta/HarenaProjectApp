import { Injectable } from '@angular/core';
import {
  collectionData,
  Firestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  setDoc,
  docData,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Person } from '../model/person';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  persons: Person[] = [];

  constructor(
    private firestore: Firestore,
    private alertController: AlertController
  ) {}

  public async addPerson(person: Person) {
    await addDoc(collection(this.firestore, 'persons'), person);
  }

  public getPersons(): Observable<Person[]> {
    return collectionData(collection(this.firestore, 'persons'), {
      idField: 'personId',
    }) as Observable<Person[]>;
  }

  public getVolunteers() {
    return this.persons.filter((p) => (p.userType = 'Volunteer'));
  }

  async deletePerson(id: string) {
    await deleteDoc(doc(this.firestore, `persons/${id}`));
  }

  async updatePerson(person: Person) {
    await setDoc(doc(this.firestore, `persons/${person.personId}`), person);
  }

  getPerson(id: string): Observable<Person> {
    const docRef = doc(this.firestore, `persons/${id}`);
    return docData(docRef, { idField: 'personId' }) as Observable<Person>;
  }

  async presentAlertConfirm(person: Person) {
    const alert = await this.alertController.create({
      header: `Borrar ${person.userType}`,
      message: `¿Estás seguro que quieres borrar a <strong>${person.lastName}</strong>? será borrado permanentemente!!!`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: yes');
          },
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.deletePerson(person.personId);
            console.log('Confirm Ok');
          },
        },
      ],
    });

    await alert.present();
  }
}
