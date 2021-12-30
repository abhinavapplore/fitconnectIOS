import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreerEvenementPage } from './creer-evenement.page';

const routes: Routes = [
  {
    path: '',
    component: CreerEvenementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreerEvenementPageRoutingModule {}
