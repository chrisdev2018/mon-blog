import {Post} from '../models/post';
import { Subject } from 'rxjs';

export class PostService {

  newId_: number;
  content = 'Le code complet et fonctionnel doit être déposé dans un dépôt\
                Git en ligne que les validateurs doivent pouvoir cloner. ';


  post1 = new Post('Mon premier post', this.content, 1);
  post2 = new Post('Mon deuxième post', this.content, 2);
  post3 = new Post('Encore un post', this.content, 3);

  PostsTab = [this.post1, this.post2, this.post3];

  postSubject = new Subject<Post[]>();

  emetPosts() {
    this.postSubject.next(this.PostsTab.slice());
  }

   nouveau_post(titre: string, contenu: string) {

    this.newId();
     const post = new Post(titre, contenu, this.newId_);
     this.PostsTab.push(post);
     this.emetPosts();
   }

   newId() {
     this.newId_ = 0;
     if(this.PostsTab.length == 0) {
        this.newId_ = 1;
     }

     else {
      this.newId_ = (this.PostsTab[this.PostsTab.length - 1]).id +1;
     }
   }


   liker(id: number) {
     this.PostsTab.forEach((_post) =>{
       if(_post.id == id) {
         _post.like += 1;
       }
     });
  }

  disliker(id: number) {
    this.PostsTab.forEach((_post) =>{
      if(_post.id == id) {
        _post.dislike += 1;
      }
    });
 }

  
}
