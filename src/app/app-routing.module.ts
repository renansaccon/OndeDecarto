import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'suggest',
    loadChildren: () => import('./suggest/suggest.module').then( m => m.suggestPageModule)
  },
  {
    path: 'procuraponto',
    loadChildren: () => import('./procuraponto/procuraponto.module').then( m => m.ProcurapontoPageModule)
  },
  {
    path: 'listapontos',
    loadChildren: () => import('./listapontos/listapontos.module').then( m => m.ListapontosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
