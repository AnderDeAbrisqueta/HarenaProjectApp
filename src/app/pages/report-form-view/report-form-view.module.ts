import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportFormViewPageRoutingModule } from './report-form-view-routing.module';

import { ReportFormViewPage } from './report-form-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportFormViewPageRoutingModule
  ],
  declarations: [ReportFormViewPage]
})
export class ReportFormViewPageModule {}
