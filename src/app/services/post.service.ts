import {Post} from '../models/post';

export class PostService {
  content = 'Le code complet et fonctionnel doit être déposé dans un dépôt\
                Git en ligne que les validateurs doivent pouvoir cloner. ';

  post1 = new Post('Mon premier post', this.content);
  post2 = new Post('Mon deuxième post', this.content);
  post3 = new Post('Encore un post', this.content);

  PostsTab = [this.post1, this.post2, this.post3];
  post: Post;

   nouveau_post(title: string, content: string) {
     this.post.title = title;
     this.post.content = content;
     this.PostsTab.push(this.post);
   }
}
