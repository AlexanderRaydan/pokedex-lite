import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required , Validators.email]],
      password: ['', [Validators.required , Validators.minLength(8), Validators.max(40)]],
    }); 
  }

  ngOnInit() {
    
  }

  register(event: Event) {

    event.preventDefault()

    if (this.form.valid) {
      const value = this.form.value;
      this.authService.Register(value.email, value.password)
        .then(() => {
          this.router.navigate(['/auth/login']);
      });
    }
  }
}
