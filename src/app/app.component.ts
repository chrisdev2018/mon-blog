import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mon premier projet Angular';


  content = 'Le code complet et fonctionnel doit être déposé dans un dépôt\
   Git en ligne que les validateurs doivent pouvoir cloner. ';

   PostsTab = [
    {
      title: 'Mon premier post',
      content: this.content,
      like: 0,
      dislike: 0,
      create_at: new Date()
    },
    {
      title: 'Mon Deuxième post',
      content: this.content,
      like: 0,
      dislike: 0,
      create_at: new Date()
    },
    {
      title: 'Encore un post post',
      content: this.content,
      like: 0,
      dislike: 0,
      create_at: new Date()
    }
  ];


}
