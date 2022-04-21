import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
//import { Router } from '@angular/router';
import { User } from '../classes/user';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  public isLogged: any = false;
  constructor(
    public afAuth: AngularFireAuth,
    //private router: Router
    ) {
    afAuth.authState.subscribe(user => (this.isLogged = user));

   }

   async onLogin(user:User){
     console.log(user);
     try {
       return await this.afAuth.signInWithEmailAndPassword(user.user,user.password);
     } catch (error) {
       return undefined;
       console.log("error" + error);
     }
   }

   async onRegister(user:User){
     try {
       return await this.afAuth.createUserWithEmailAndPassword(user.user, user.password);
     } catch (error) {
       return undefined;
       console.log('error', error);
     }
   }

   getCurrentUser() {
    return this.afAuth.currentUser;
  }

  logout() {
    this.afAuth.signOut();
  }
}
