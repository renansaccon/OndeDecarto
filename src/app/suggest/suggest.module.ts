import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { suggestPageRoutingModule } from './suggest-routing.module';

import { suggestPage } from './suggest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    suggestPageRoutingModule
  ],
  declarations: [suggestPage]
})
export class suggestPageModule {}
