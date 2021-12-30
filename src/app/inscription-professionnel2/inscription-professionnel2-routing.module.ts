import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionProfessionnel2Page } from './inscription-professionnel2.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptionProfessionnel2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionProfessionnel2PageRoutingModule {}
