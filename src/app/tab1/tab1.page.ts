import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

interface User {
  email?: string;
  password?: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  user: User = {
    email: 'finn_mertens@gmail.com',
    password: 'finnismath',
  };

  constructor( public afAuth: AngularFireAuth) {}
  
  async createAccount(){
    const user = await this.afAuth.createUserWithEmailAndPassword(
      this.user.email,
      this.user.password
    );

    console.log(user);
  }

  async login(){
    const user = await this.afAuth.signInWithEmailAndPassword(
      this.user.email,
      this.user.password
    );

    console.log(user);
  }

  async logout(){
    await this.afAuth.signOut();
  }
  
}
