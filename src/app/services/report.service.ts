import { Injectable } from '@angular/core';
import { Report } from '../model/report';
import { AlertController } from '@ionic/angular';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore,
  setDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  reports: Report[] = [];

  constructor(
    private firestore: Firestore,
    private alertController: AlertController
  ) {}

  public async addReport(report: Report) {
    await addDoc(collection(this.firestore, 'reports'), report);
  }

  public getReports(): Observable<Report[]> {
    return collectionData(collection(this.firestore, 'reports'), {
      idField: 'reportId',
    }) as Observable<Report[]>;
  }

  async deleteReport(id: string) {
    await deleteDoc(doc(this.firestore, `reports/${id}`));
  }

  async updateReport(report: Report) {
    await setDoc(doc(this.firestore, `reports/${report.reportId}`), report);
  }

  getReport(id: string): Observable<Report> {
    const docRef = doc(this.firestore, `reports/${id}`);
    return docData(docRef, { idField: 'reportId' }) as Observable<Report>;
  }

  async presentAlertConfirm(report: Report) {
    const alert = await this.alertController.create({
      header: `Borrar ${report.reportReference}`,
      message: `¿Estás seguro que quieres borrar a <strong> el reporte número: ${report.reportReference}</strong>? será borrado permanentemente!!!`,
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
            this.deleteReport(report.reportId);
            console.log('Confirm Ok');
          },
        },
      ],
    });

    await alert.present();
  }
}
