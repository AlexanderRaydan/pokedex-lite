import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { PokemonsService } from 'src/app/core/services/pokemons.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemon?: Pokemon
  pokemon_to_evolution?: Pokemon
  
  constructor(
    private route: ActivatedRoute,
    private pokemonServices: PokemonsService,

  ) {}

  ngOnInit(): void {

    this.route.params.subscribe((params: Params)=>{
      const id = params.id      
      this.fetchPokemonById(id)
    })
  }

  fetchPokemonById(id:string){
    this.pokemonServices.getPokemonById(id)
      .subscribe(pokemon => {
        this.pokemon = pokemon
        this.pokemonServices.getPokemonById(pokemon.evolution_to.toString())
        .subscribe(pokemon =>{
          this.pokemon_to_evolution = pokemon
      })
    })
  }

  
  deletePokemon(id: string){

    this.pokemonServices.deletePokemon(id)
      .subscribe(pokemon => console.log(`pokemon ${pokemon.name} deleted`))
  }
}
