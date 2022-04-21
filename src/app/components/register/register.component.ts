import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User = new User();

  constructor(
    private router:Router,
    private authServ:AuthServiceService
    ) { }
  
  login(){
    this.router.navigate(['']);
  }

  register(){
    this.authServ.onRegister(this.user).then(
      response => {
        this.router.navigate(['/home']);
      }
    ).then(
      err => {

      }
    )
    
  }

  ngOnInit(): void {
  }

}
