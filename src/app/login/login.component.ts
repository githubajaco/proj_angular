import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(formBuilder: FormBuilder, private authService: AuthService,
    private router: Router, private snackBar: MatSnackBar){      
    //un service formulaire, auth, routage et barre d'info si nok 
    this.form = formBuilder.group({
      email: ['', Validators.email],
      password: ''
    });
  }
   ngOnInit() {
  }
  
  public login(){
    if(this.form.valid){
      this.authService.login(this.form.value).subscribe(
        loginSuccess => {
          this.router.navigate(['/rdv'])
        },loginError => {
          this.snackBar.open('Authentification échoué', 'OK', {
            duration: 5000,
          });
        }
      )
    }
  }

  

}
