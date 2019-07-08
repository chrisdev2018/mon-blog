import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mon premier projet Angular';

  posts: any[];
  constructor(private ServicePost: PostService) {
  }

  ngOnInit() {
    this.posts = this.ServicePost.PostsTab;
  }
}
