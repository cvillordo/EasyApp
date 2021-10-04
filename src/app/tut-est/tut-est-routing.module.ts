import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutEstPage } from './tut-est.page';

const routes: Routes = [
  {
    path: '',
    component: TutEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutEstPageRoutingModule {}
