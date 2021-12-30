import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesEvenementsPage } from './mes-evenements.page';

const routes: Routes = [
  {
    path: '',
    component: MesEvenementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesEvenementsPageRoutingModule {}
