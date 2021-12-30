import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapSportifsPage } from './map-sportifs.page';

const routes: Routes = [
  {
    path: '',
    component: MapSportifsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapSportifsPageRoutingModule {}
