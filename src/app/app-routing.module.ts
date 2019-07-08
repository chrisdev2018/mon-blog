import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { AuthComponent } from './auth/auth.component';
import { AppComponent } from './app.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';

const routes: Routes = [
  {
    path: 'liste-des-posts',
    component: PostListComponent
  },
  {
    path: '',
    component: PostListItemComponent
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
