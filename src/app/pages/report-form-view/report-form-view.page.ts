import { Component, OnInit } from '@angular/core';
import { Report } from '../../model/report';
import { ReportService } from '../../services/report.service';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx/index';
import { FileOpener } from '@ionic-native/file-opener/ngx/index';

import { Filesystem } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-report-form-view',
  templateUrl: './report-form-view.page.html',
  styleUrls: ['./report-form-view.page.scss'],
})
export class ReportFormViewPage implements OnInit {
  report: Report = {
    coordinator: '',
    oldPerson: {
      personId: '',
      imageUrl: '',
      firstName: '',
      lastName: '',
      gender: '',
      address: {
        street: '',
        numberStreet: 0,
        postCode: 0,
      },
      phone: '',
      email: '',
      userType: '',
      description: '',
      personAtending: '',
      oldPersonAditionalInfo: {
        hasChildren: false,
        childrenNumber: 0,
        civilStatus: '',
        hasHelpTownHall: false,
        helpTownHallType: [],
        hasPsychologicalHelp: false,
        treatment: [],
        observations: '',
      },
    },
    volunteer: {
      personId: '',
      imageUrl: '',
      firstName: '',
      lastName: '',
      gender: '',
      address: {
        street: '',
        numberStreet: 0,
        postCode: 0,
      },
      phone: '',
      email: '',
      userType: '',
      description: '',
      personAtending: '',
      oldPersonAditionalInfo: {
        hasChildren: false,
        childrenNumber: 0,
        civilStatus: '',
        hasHelpTownHall: false,
        helpTownHallType: [],
        hasPsychologicalHelp: false,
        treatment: [],
        observations: '',
      },
    },
    reportId: '',
    reportReference: '',
    summaryVisit: '',
  };

  userName: string = localStorage.getItem('userName');
  userLastName: string = localStorage.getItem('userLastName');

  pdfObj = null;

  constructor(
    private reportService: ReportService,
    private activatedRoute: ActivatedRoute,
    private platform: Platform,
    private file: File,
    private fileOpener: FileOpener
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.reportService
        .getReport(id)
        .subscribe((data) => (this.report = data));
    }
  }

  downloadPdf() {
    var docDefinition = {
      content: [
        {
          text: `Número de referencia: ${this.report.reportReference}`,
          style: 'ref',
          alignment: 'right',
        },

        { text: 'Fundación Harena', style: 'header', alignment: 'center' },

        { text: 'Reporte de la visita', style: 'subheader' },

        {
          text: `Coordinador: ${this.userName + ' ' + this.userLastName}`,
          style: 'ref',
        },

        {
          text: `Persona Voluntaria: ${
            this.report.volunteer.firstName +
            ' ' +
            this.report.volunteer.lastName
          }`,
          style: 'h6',
        },
        { text: `Teléfono: ${this.report.volunteer.phone}`, style: 'h6' },
        {
          text: `Primera vez en Harena: ${
            this.report.volunteer.isFirstTimeHarena ? 'Si' : 'No'
          }`,
          style: 'ref',
        },

        {
          text: `Persona mayor: ${
            this.report.oldPerson.firstName +
            ' ' +
            this.report.oldPerson.lastName
          }`,
          style: 'h6',
        },
        {
          text: `Dirección: ${
            this.report.oldPerson.address.street +
            ', ' +
            this.report.oldPerson.address.numberStreet
          }`,
          style: 'h6',
        },
        { text: `Teléfono: ${this.report.oldPerson.phone}`, style: 'ref' },

        { text: 'Resumen de la visita: ', style: 'subheader' },
        {
          text: this.report.summaryVisit,
          style: 'story',
          margin: [0, 20, 0, 20],
        },
      ],

      styles: {
        header: {
          fontSize: 16,
          bold: true,
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 20, 0, 20],
        },
        ref: {
          fontSize: 12,
          margin: [0, 0, 0, 16],
        },

        h6: {
          fontSize: 12,
        },
        story: {
          alignment: 'center',
          width: '75%',
        },
      },
    };
    pdfMake.createPdf(docDefinition).download('report.pdf');
  }
}
