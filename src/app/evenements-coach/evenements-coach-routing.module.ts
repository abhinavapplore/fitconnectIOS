import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvenementsCoachPage } from './evenements-coach.page';

const routes: Routes = [
  {
    path: '',
    component: EvenementsCoachPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvenementsCoachPageRoutingModule {}
