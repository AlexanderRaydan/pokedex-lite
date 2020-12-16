import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auhtServices: AuthService,
  ) { 

    this.form = this.formBuilder.group({
      email: ['', [Validators.required , Validators.email]],
      password: ['', [Validators.required , Validators.minLength(8), Validators.max(40)]],
    }); 
  }

  ngOnInit(): void {
  }
  login(even: Event){

    even.preventDefault()

    console.log(this.form.valid)

    if(this.form.valid){
      const value = this.form.value
      this.auhtServices.Login(value.email , value.password)
      .then(() => {

        console.log('login succes !')
        this.router.navigate(['/pokemon/pokemons'])
      })
    }
  }
}
