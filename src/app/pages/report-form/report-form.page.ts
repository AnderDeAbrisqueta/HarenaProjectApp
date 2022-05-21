import { Component, OnInit } from '@angular/core';
import { Person } from '../../model/person';
import { Observable } from 'rxjs';
import { PersonService } from '../../services/person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Report } from '../../model/report';
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.page.html',
  styleUrls: ['./report-form.page.scss'],
})
export class ReportFormPage implements OnInit {
  person: Person = {
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
  };

  report: Report = {
    coordinator: '',
    oldPesonName: '',
    volunteerName: '',
    reportId: '',
    reportReference: '',
    summaryVisit: '',
  };

  searchedText: string = '';
  pageTitle: string = 'Nuevo formulario';
  action: string = 'report-form';

  persons: Observable<Person[]>;
  reports: Observable<Report[]>;

  constructor(
    private personService: PersonService,
    private reportService: ReportService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.persons = this.personService.getPersons();
    this.reports = this.reportService.getReports();
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.pageTitle = 'Editar formulario';
      this.action = 'edit-report-form';
      this.reportService
        .getReport(id)
        .subscribe((data) => (this.report = data));
    }
  }

  addReport() {
    if (this.action === 'report-form') {
      this.reportService.addReport(this.report);
    } else {
      this.reportService.updateReport(this.report);
    }
  }

  searchPerson(event) {
    const text = event.target.value;
    this.searchedText = text;
  }
}
