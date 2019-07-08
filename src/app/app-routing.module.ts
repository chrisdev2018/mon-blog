import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: 'liste-des-posts',
    component: PostListComponent
  },
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'login-page',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
