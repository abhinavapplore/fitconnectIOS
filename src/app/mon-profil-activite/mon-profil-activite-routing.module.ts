import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonProfilActivitePage } from './mon-profil-activite.page';

const routes: Routes = [
  {
    path: '',
    component: MonProfilActivitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonProfilActivitePageRoutingModule {}
