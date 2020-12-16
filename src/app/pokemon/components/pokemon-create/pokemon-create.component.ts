import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { PokemonsService } from 'src/app/core/services/pokemons.service';

import { Pokemon } from 'src/app/core/models/pokemon.model';

@Component({
  selector: 'app-pokemon-create',
  templateUrl: './pokemon-create.component.html',
  styleUrls: ['./pokemon-create.component.scss']
})
export class PokemonCreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private pokemonService: PokemonsService,
    private autservices: AuthService,
  ) { 
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      level: ['', [Validators.required]],
      evolution_level: ['', [Validators.required]],
      image: ['', [Validators.required]],
      evolution_to: ['', [Validators.required]],
      abilities: ['', [Validators.required]],
    }); 
  }

  ngOnInit(): void {
  }

  create(event: Event){
    event.preventDefault()
    
    if(this.form.valid){
      const value = this.form.value

      this.autservices.getCurrentUser()
        .subscribe(user => {
          let pokemon: Pokemon = {
            id: '',
            Uid: user?.uid,
            name: value.name,
            type: value.type,
            level: value.level,
            evolution_level: value.evolution_level,
            evolution_to: value.evolution_to,
            image: value.image,
            abilities: [value.abilities]
          }

          this.pokemonService.createPokemon(pokemon)
            .subscribe( pokemon => this.router.navigate(['/pokemon/pokemons'])
        )
      })
    }
  }
}
