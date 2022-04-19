import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'old-person-list',
    loadChildren: () =>
      import('./pages/old-person-list/old-person-list.module').then(
        (m) => m.OldPersonListPageModule
      ),
  },
  {
    path: 'volunteers-list',
    loadChildren: () =>
      import('./pages/volunteers-list/volunteers-list.module').then(
        (m) => m.VolunteersListPageModule
      ),
  },
  {
    path: 'report-list',
    loadChildren: () =>
      import('./pages/report-list/report-list.module').then(
        (m) => m.ReportListPageModule
      ),
  },
  {
    path: 'create-profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'edit-profile/:id',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfilePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
