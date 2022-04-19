import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolunteersListPage } from './volunteers-list.page';

const routes: Routes = [
  {
    path: '',
    component: VolunteersListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolunteersListPageRoutingModule {}
