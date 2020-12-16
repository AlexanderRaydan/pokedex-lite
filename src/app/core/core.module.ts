import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsService } from './services/pokemons.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PokemonsService
  ]
})
export class CoreModule { }
