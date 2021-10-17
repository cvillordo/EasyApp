import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'estudiante',
    loadChildren: () => import('./tutor/estudiante/estudiante.module').then( m => m.EstudiantePageModule)
  },
  {
    path: 'tut-est',
    loadChildren: () => import('./tut-est/tut-est.module').then( m => m.TutEstPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
