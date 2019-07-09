import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  constructor(private postService: PostService,
              private router: Router) { }

    onSubmit(form: NgForm) {
      this.postService.nouveau_post(
        form.value.title,
        form.value.content
      );

      alert('Informations bien enregistrées!!!');

      form.resetForm();
      this.router.navigate(['/liste-des-posts']);
      //TODO: attendre même 3 secondes avant de faire la redirection
    }

  ngOnInit() {}

}
