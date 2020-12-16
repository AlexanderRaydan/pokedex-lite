import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AngularFireStorage } from '@angular/fire/storage';
import { Pokemon} from '../models/pokemon.model';
import { AuthService } from './auth.service';


import pokemons from '../../data/pokemons.json';
import { finished } from 'stream';
import { read } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private jsonData:JSON = pokemons
  private pokemons: Pokemon[] = []

  private URL: string = 'http://192.168.0.19:8000/api/pokemons'

  constructor(
    private http: HttpClient,
  ) { }

  public allPokemons(){

    return this.http.get<Pokemon[]>(this.URL) 
  }

  public getPokemonById(id:string){

    return this.http.get<Pokemon>(`${this.URL}/${id}`)
  }

  public createPokemon(pokemon: Pokemon){

    return this.http.post(this.URL , pokemon)
  }

  public updatePokemon(id: string , changes: Partial<Pokemon>){

    return this.http.put(`${this.URL}/${id}` , changes)
  }

  public deletePokemon(id:string){
    
    return this.http.delete<Pokemon>(`${this.URL}/${id}`)
  }
}
