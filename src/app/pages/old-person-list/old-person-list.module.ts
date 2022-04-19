import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OldPersonListPageRoutingModule } from './old-person-list-routing.module';

import { OldPersonListPage } from './old-person-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OldPersonListPageRoutingModule
  ],
  declarations: [OldPersonListPage]
})
export class OldPersonListPageModule {}
