import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilereviewPage } from './profilereview.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilereviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilereviewPageRoutingModule {}
