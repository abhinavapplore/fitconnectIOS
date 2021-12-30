import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvenementcoachPage } from './evenementcoach.page';

const routes: Routes = [
  {
    path: '',
    component: EvenementcoachPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvenementcoachPageRoutingModule {}
