import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportListPage } from './report-list.page';

const routes: Routes = [
  {
    path: '',
    component: ReportListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportListPageRoutingModule {}
