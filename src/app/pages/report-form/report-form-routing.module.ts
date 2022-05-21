import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportFormPage } from './report-form.page';

const routes: Routes = [
  {
    path: '',
    component: ReportFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportFormPageRoutingModule {}
