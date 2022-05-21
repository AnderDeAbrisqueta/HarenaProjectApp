import { NgModule } from '@angular/core';
import { SearchPersonPipe } from './search-person.pipe';
import { CommonModule } from '@angular/common';
import { SearchReportPipe } from './search-report.pipe';

@NgModule({
  declarations: [SearchPersonPipe, SearchReportPipe],
  exports: [SearchPersonPipe, SearchReportPipe],
  imports: [CommonModule],
})
export class PipesModule {}
