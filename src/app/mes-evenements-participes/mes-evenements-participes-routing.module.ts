import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesEvenementsParticipesPage } from './mes-evenements-participes.page';

const routes: Routes = [
  {
    path: '',
    component: MesEvenementsParticipesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesEvenementsParticipesPageRoutingModule {}
