import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcurapontoPageRoutingModule } from './procuraponto-routing.module';

import { ProcurapontoPage } from './procuraponto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcurapontoPageRoutingModule
  ],
  declarations: [ProcurapontoPage]
})
export class ProcurapontoPageModule {}
