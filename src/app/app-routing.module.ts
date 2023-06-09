import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { PageNotFoundComponent } from './core/components/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './core/components/form/register/register.component';
import { LoginComponent } from './core/components/form/login/login.component';

import { AuthGuard } from './core/guards/auth.guard';
import { PPostsComponent } from './features/posts/pages/p-posts/p-posts.component';
import { FullPostComponent } from './features/posts/pages/p-posts/components/full-post/full-post.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
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
    path: 'posts',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: PPostsComponent,
      },
      {
        path: 'post/:id',
        component: FullPostComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
