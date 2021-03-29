import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //---DEFAULT------
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  //---DEFAULT------

  //---LOGIN UPON SITE OPEN-----
  // { path: '', redirectTo: 'login', pathMatch: 'full'},
  // {
  //   path: 'tabs',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./login/login.module').then(m => m.loginPageModule)
  // },
  // {
  //   path: 'signup',
  //   loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  // },
  // {
  //   path: 'registration',
  //   loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  // },
  // {
  //   path: 'verify-email',
  //   loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  // },
  //---LOGIN UPON SITE OPEN-----
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}


