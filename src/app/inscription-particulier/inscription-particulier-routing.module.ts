import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionParticulierPage } from './inscription-particulier.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptionParticulierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionParticulierPageRoutingModule {}
