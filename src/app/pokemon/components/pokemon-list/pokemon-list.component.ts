import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { PokemonsService } from 'src/app/core/services/pokemons.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})

export class PokemonListComponent implements OnInit {

  public pokemons: Pokemon[] = []
  userId?: String = ''

  constructor(
    private pokemonServices: PokemonsService,
    private authServices: AuthService,
    private router: Router,
    ) {}
     
  ngOnInit() {

    this.loadPokemons(this.userId)
  }

  loadPokemons(uid?: String){

    this.authServices.getCurrentUser()
     .subscribe(user => { // get userID
        console.log(user?.uid);
        this.userId = user?.uid
        this.pokemonServices.allPokemons()
          .subscribe(pokemons =>{ // filter by userId
            this.pokemons = pokemons.filter(item => user?.uid === item.Uid)
      })
    })
  }

  logoutButton(){
    this.authServices.Logout()
      .then( () => this.router.navigate(['auth/login'])
    )
  }
}
