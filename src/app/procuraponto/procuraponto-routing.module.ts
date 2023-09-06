import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcurapontoPage } from './procuraponto.page';

const routes: Routes = [
  {
    path: '',
    component: ProcurapontoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcurapontoPageRoutingModule {}
