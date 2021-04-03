import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { loginPage } from './login.page';
import { signupPage } from '../signup/signup.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: loginPage,
    children: [
      {
        path: 'signup', component: signupPage
      },
      {
        path: '',
        redirectTo: '/login/loginPage',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login/loginPage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), signupPage],
  exports: [RouterModule],
})
export class loginPageRoutingModule {}
