import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportFormViewPage } from './report-form-view.page';

const routes: Routes = [
  {
    path: '',
    component: ReportFormViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportFormViewPageRoutingModule {}
