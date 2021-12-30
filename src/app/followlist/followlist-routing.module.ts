import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FollowlistPage } from './followlist.page';

const routes: Routes = [
  {
    path: '',
    component: FollowlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FollowlistPageRoutingModule {}
