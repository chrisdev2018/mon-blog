import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mon premier projet Angular';

  constructor(private postService: PostService) {
       
  }

  ngOnInit() {
        if(confirm("Voulez-vous charger les données de demo ?")) {
          this.postService.charger_demo_datas();
        }
  }
}
