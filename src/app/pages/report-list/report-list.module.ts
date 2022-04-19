import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportListPageRoutingModule } from './report-list-routing.module';

import { ReportListPage } from './report-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportListPageRoutingModule
  ],
  declarations: [ReportListPage]
})
export class ReportListPageModule {}
