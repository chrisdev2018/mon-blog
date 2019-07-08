import {Post} from '../post';

export class PostService {
  content = 'Le code complet et fonctionnel doit être déposé dans un dépôt\
                Git en ligne que les validateurs doivent pouvoir cloner. ';

  post1 = new Post("Mon premier post", this.content);
  post2 = new Post("Mon deuxième post", this.content);
  post3 = new Post("Encore un post", this.content);

   PostsTab = [this.post1, this.post2, this.post3];
}
