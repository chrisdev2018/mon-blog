import { Component, OnInit, Input } from '@angular/core';
import {PostService} from '../services/post.service';
import { Post } from '../models/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];

  postSubcription: Subscription;

  constructor(private ServicePost: PostService) {}

  ngOnInit() {
    this.postSubcription = this.ServicePost.postSubject.subscribe(
// tslint:disable-next-line: variable-name
      (_posts: Post[]) => {
        this.posts = _posts;
      }
    );
    this.ServicePost.emitPosts();
  }

// tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    this.postSubcription.unsubscribe();
  }

}
