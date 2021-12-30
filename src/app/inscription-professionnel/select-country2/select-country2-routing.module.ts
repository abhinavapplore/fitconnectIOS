import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectCountry2Page } from './select-country2.page';

const routes: Routes = [
  {
    path: '',
    component: SelectCountry2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectCountry2PageRoutingModule {}
