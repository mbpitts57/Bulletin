import { Component } from '@angular/core';
import { AuthenticationService } from "../shared/authentication-service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private route: Router,
    public authService: AuthenticationService
  ) {}

  toRegPage(){
    console.log('redirecting to registration page');
    this.route.navigateByUrl("../registration/registration.page.html");
  }
}
