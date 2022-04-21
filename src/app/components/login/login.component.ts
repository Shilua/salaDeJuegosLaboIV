import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { response } from 'express';
import { User } from 'src/app/classes/user';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User;
  constructor(
    private router:Router,
    private authServ:AuthServiceService
     ) {
    this.user = new User();
   }

  login(){
    this.authServ.onLogin(this.user).then(
      response => {
        console.log(response);
        this.router.navigate(['/home']);
      }
    ).catch(
      err => {
        console.log(err);
      }
    )
    /*if(this.user.user == 'admin@admin.com' && this.user.password == 'admin'){
      
    }*/
    
  }

  register(){
    this.router.navigate(['/register']);
  }



  ngOnInit(): void {
  }

}
