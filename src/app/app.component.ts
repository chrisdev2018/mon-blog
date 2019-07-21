import { Component, OnInit } from '@angular/core';
import { PostService } from '../app/services/post.service';



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
        this.charger_demo_datas();
  }

  charger_demo_datas() {
      if(confirm("Voulez-vous charger les données de demo ?")) {
        this.postService.init_demo_datas();            
    }
  }
}
