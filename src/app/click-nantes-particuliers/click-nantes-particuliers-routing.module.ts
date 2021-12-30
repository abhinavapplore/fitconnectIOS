import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClickNantesParticuliersPage } from './click-nantes-particuliers.page';

const routes: Routes = [
  {
    path: '',
    component: ClickNantesParticuliersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClickNantesParticuliersPageRoutingModule {}
