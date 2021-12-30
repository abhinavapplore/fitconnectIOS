import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WatchreviewPage } from './watchreview.page';

const routes: Routes = [
  {
    path: '',
    component: WatchreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WatchreviewPageRoutingModule {}
