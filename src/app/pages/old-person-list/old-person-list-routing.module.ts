import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OldPersonListPage } from './old-person-list.page';

const routes: Routes = [
  {
    path: '',
    component: OldPersonListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OldPersonListPageRoutingModule {}
