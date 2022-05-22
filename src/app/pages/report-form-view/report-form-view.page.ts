import { Component, OnInit } from '@angular/core';
import { Report } from '../../model/report';
import { ReportService } from '../../services/report.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    private reportService: ReportService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.reportService
        .getReport(id)
        .subscribe((data) => (this.report = data));
    }
  }

  sendEmail() {}
}
