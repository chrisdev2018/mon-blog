import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostService } from './services/post.service';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './services/auth.service';
import { EditPostComponent } from './edit-post/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostListComponent,
    PostListItemComponent,
    AuthComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PostService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
