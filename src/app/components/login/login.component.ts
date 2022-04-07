import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User;
  constructor(private router:Router ) {
    this.user = new User();
   }

  login(){
    if(this.user.user == 'admin@admin.com' && this.user.password == 'admin'){
      this.router.navigate(['/home']);
    }
    
  }

  register(){
    this.router.navigate(['/register']);
  }



  ngOnInit(): void {
  }

}
