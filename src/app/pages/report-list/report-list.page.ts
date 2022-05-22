import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Report } from 'src/app/model/report';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.page.html',
  styleUrls: ['./report-list.page.scss'],
})
export class ReportListPage implements OnInit {
  reports: Observable<Report[]>;
  searchedText: string = '';

  constructor(private router: Router, public reportService: ReportService) {
    this.reports = this.reportService.getReports();
  }

  ngOnInit() {}

  addReport() {
    this.router.navigateByUrl('report-form');
  }

  goEditReport(id: string) {
    this.router.navigateByUrl(`edit-report-form/${id}`);
  }

  searchReport(event) {
    const text = event.target.value;
    this.searchedText = text;
  }

  goReportView(id: string) {
    this.router.navigateByUrl(`report-view/${id}`);
  }
}
