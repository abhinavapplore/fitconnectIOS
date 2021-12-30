import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachviewprofilePage } from './coachviewprofile.page';

const routes: Routes = [
  {
    path: '',
    component: CoachviewprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachviewprofilePageRoutingModule {}
