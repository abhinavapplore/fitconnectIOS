import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvenementcoachvuePage } from './evenementcoachvue.page';

const routes: Routes = [
  {
    path: '',
    component: EvenementcoachvuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvenementcoachvuePageRoutingModule {}
