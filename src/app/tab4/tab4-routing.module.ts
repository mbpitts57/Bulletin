import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab4Page } from './tab4.page';

const routes: Routes = [
  {
    path: 'login', loadChildren: () => import('../login/login.module').then(m => m.loginPageModule),
    redirectTo: 'login', pathMatch: 'full',
    component: Tab4Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab4PageRoutingModule {}