import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionDocsPage } from './inscription-docs.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptionDocsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionDocsPageRoutingModule {}
