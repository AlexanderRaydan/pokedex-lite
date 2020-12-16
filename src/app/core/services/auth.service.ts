import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afa: AngularFireAuth,
  ) {}

  Register(email: string , pass: string){

    return this.afa.createUserWithEmailAndPassword(email , pass)
  }

  Login(email: string , pass: string){

    return this.afa.signInWithEmailAndPassword(email , pass)
  }

  Logout(){

    return this.afa.signOut()
  }

  getCurrentUser(){

    return this.afa.authState
  }
}
