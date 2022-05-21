import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportFormPageRoutingModule } from './report-form-routing.module';

import { ReportFormPage } from './report-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportFormPageRoutingModule
  ],
  declarations: [ReportFormPage]
})
export class ReportFormPageModule {}
