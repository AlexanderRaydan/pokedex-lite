import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonCreateComponent } from './components/pokemon-create/pokemon-create.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

const routes: Routes = [

  {
    path: 'pokemons',
    component: PokemonListComponent
  },
  {
    path: 'detail/:id',
    component: PokemonDetailComponent
  },
  {
    path: 'create',
    component: PokemonCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PokemonRoutingModule { }
