import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class loginPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(){

  }

  login(){
    this.router.navigate(['/tabs']);
    console.log("login redirect");
  }
}
