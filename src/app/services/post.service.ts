import {Post} from '../models/post';
import { Subject } from 'rxjs';

export class PostService {

  newId_: number;
  
  PostsTab = new Array<Post>();

  init_demo_datas() {
    let content = 'Le code complet et fonctionnel doit être déposé dans un dépôt\
    Git en ligne que les validateurs doivent pouvoir cloner. ';

    this.nouveau_post('Mon premier post', content);
    this.nouveau_post('Mon deuxième post', content);
    this.nouveau_post('Encore un post', content);

    this.emetPosts();
  }


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

  
  deletePost(id: number) {  
    this.PostsTab = this.PostsTab.filter(_post => _post.id !== id);
    this.emetPosts();
  }
}
