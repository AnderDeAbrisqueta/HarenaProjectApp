import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileViewPage } from './profile-view.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileViewPageRoutingModule {}
