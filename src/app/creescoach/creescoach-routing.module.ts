import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreescoachPage } from './creescoach.page';

const routes: Routes = [
  {
    path: '',
    component: CreescoachPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreescoachPageRoutingModule {}
