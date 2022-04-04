import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router ) { }

  login(){
    this.router.navigate(['/home']);
  }

  register(){
    this.router.navigate(['/register']);
  }

  ngOnInit(): void {
  }

}
