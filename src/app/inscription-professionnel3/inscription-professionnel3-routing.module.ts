import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionProfessionnel3Page } from './inscription-professionnel3.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptionProfessionnel3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionProfessionnel3PageRoutingModule {}
