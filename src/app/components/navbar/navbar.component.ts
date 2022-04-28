import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user:any;
  constructor(
    private router:Router,
    private authServ :AuthServiceService
    ) { }

  home(){
    this.router.navigate(['/home']);
  }

  quienSoy(){
    this.router.navigate(['/quien-soy']);
  }

  logOut(){
    this.authServ.logout();
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
   this.authServ.getCurrentUser().then(
     response => {
       this.user = response?.email
     }
   );
   
  }

}
