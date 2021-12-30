import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilActivitePage } from './profil-activite.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilActivitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilActivitePageRoutingModule {}
