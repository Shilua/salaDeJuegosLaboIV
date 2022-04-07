import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:string;
  password:string;
  constructor(private router:Router ) {
    this.user = '';
    this.password = '';
   }

  login(){
    if(this.user == 'admin@admin.com' && this.password == 'admin'){
      this.router.navigate(['/home']);
    }
    
  }

  register(){
    this.router.navigate(['/register']);
  }

  precargar(){
    this.user = 'admin@admin.com';
    this.password = 'admin';
  }

  ngOnInit(): void {
  }

}
