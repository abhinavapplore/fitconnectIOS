import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SportsPracticePage } from './sports-practice.page';

const routes: Routes = [
  {
    path: '',
    component: SportsPracticePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportsPracticePageRoutingModule {}
