import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesEvenementsCreesPage } from './mes-evenements-crees.page';

const routes: Routes = [
  {
    path: '',
    component: MesEvenementsCreesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesEvenementsCreesPageRoutingModule {}
