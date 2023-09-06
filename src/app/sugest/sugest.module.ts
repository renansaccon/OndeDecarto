import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SugestPageRoutingModule } from './sugest-routing.module';

import { SugestPage } from './sugest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SugestPageRoutingModule
  ],
  declarations: [SugestPage]
})
export class SugestPageModule {}
