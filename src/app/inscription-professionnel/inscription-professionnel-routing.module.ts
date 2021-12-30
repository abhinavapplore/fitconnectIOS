import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionProfessionnelPage } from './inscription-professionnel.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptionProfessionnelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionProfessionnelPageRoutingModule {}
