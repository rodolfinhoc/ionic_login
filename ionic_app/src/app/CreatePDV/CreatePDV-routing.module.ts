import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePDVPage } from './CreatePDV.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePDVPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePDVPageRoutingModule {}
