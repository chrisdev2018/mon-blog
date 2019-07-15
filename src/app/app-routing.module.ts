import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { AuthComponent } from './auth/auth.component';
import { AppComponent } from './app.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { EditPostComponent } from './edit-post/edit-post.component';

const routes: Routes = [
  {
    path: 'liste-des-posts',
    component: PostListComponent
  },
  {
    path: '',
    component: PostListComponent
  },
  {
    path: 'login-page',
    component: AuthComponent
  },
  {
    path: 'post-edit',
    component: EditPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
