import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthLogService {

  constructor(private firestore: AngularFirestore) { }
  getElements(){
    return this.firestore.collection('loginLog').ref;
  }
  createElement(log: any){
    this.firestore.collection('loginLog').add(log);
  }
}
