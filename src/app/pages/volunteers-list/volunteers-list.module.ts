import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolunteersListPageRoutingModule } from './volunteers-list-routing.module';

import { VolunteersListPage } from './volunteers-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolunteersListPageRoutingModule
  ],
  declarations: [VolunteersListPage]
})
export class VolunteersListPageModule {}
