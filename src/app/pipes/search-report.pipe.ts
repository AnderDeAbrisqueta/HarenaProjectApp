import { Pipe, PipeTransform } from '@angular/core';
import { Report } from '../model/report';

@Pipe({
  name: 'searchReport',
})
export class SearchReportPipe implements PipeTransform {
  transform(report: Report[], text: string): Report[] {
    if (text.length === 0) {
      return report;
    }

    text = text.toLocaleLowerCase();

    return report.filter((reports) => {
      return reports.reportReference.toLocaleLowerCase().includes(text);
    });
  }
}
