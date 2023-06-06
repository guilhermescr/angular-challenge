import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { PageNotFoundComponent } from './core/components/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './core/components/form/register/register.component';
import { LoginComponent } from './core/components/form/login/login.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'pagenotfound',
    component: PageNotFoundComponent,
  },
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'pagenotfound',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
