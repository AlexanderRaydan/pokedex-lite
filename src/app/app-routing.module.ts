import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuardsGuard } from './login-guards.guard';

const routes: Routes = [

  {
    path:'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'pokemon',
    canActivate: [LoginGuardsGuard],
    loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule)
  }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
