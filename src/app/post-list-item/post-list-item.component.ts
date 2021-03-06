import { Component, OnInit, Input } from '@angular/core';
import {Post} from '../models/post';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input()
  _Post_: Post;

  onLike() {
    this.servicePost.liker(this._Post_.id);
  }

  onDisLike() {
    this.servicePost.disliker(this._Post_.id);
  }

  onDelete(id: number) {
    if(confirm('Voulez vous vraiment supprimer ce post ? ')) {
      
      this.servicePost.deletePost(this._Post_.id);
    }
  }
  
  
  constructor(private servicePost: PostService,
    private router: Router) { }

  ngOnInit() {
  }

}
