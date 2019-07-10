import { Component, OnInit, Input } from '@angular/core';
import {Post} from '../models/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input()
  _Post_: Post;

  liker() {
    this._Post_.like += 1;
  }

  disliker() {
    this._Post_.dislike += 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
