import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutEstPageRoutingModule } from './tut-est-routing.module';

import { TutEstPage } from './tut-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutEstPageRoutingModule
  ],
  declarations: [TutEstPage]
})
export class TutEstPageModule {}
