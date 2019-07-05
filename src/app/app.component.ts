import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mon premier projet Angular';

  post: {
    title: string,
    content: string,
    like: number,
    dislike: number,
    create_at: number

  };

  content = 'Le code complet et fonctionnel doit être déposé dans un dépôt\
   Git en ligne que les validateurs doivent pouvoir cloner. ';

  allPost = [
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
