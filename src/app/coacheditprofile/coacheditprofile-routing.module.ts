import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoacheditprofilePage } from './coacheditprofile.page';

const routes: Routes = [
  {
    path: '',
    component: CoacheditprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoacheditprofilePageRoutingModule {}
