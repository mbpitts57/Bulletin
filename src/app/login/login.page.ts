import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

interface User {
  email?: string;
  password?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})

export class loginPage {
  user: User = {
    email: 'finn_mertens@gmail.com',
    password: 'finnismath',
  };

  constructor(public afAuth: AngularFireAuth, private router: Router) {}
  
  navtosignup(){
    this.router.navigate(['/signup'])
  }

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