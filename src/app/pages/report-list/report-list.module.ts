import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportListPageRoutingModule } from './report-list-routing.module';

import { ReportListPage } from './report-list.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportListPageRoutingModule,
    PipesModule,
  ],
  declarations: [ReportListPage],
})
export class ReportListPageModule {}
