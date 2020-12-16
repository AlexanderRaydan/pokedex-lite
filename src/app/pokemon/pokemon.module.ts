import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonCreateComponent } from './components/pokemon-create/pokemon-create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PokemonDetailComponent,
    PokemonListComponent,
    PokemonCreateComponent,
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    ReactiveFormsModule,
  ]
})
export class PokemonModule { }
