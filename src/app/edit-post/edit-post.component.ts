import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { Post } from '../models/post';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  constructor(private postService: PostService,
              private router: Router, private builderForm: FormBuilder) { }

  userForm: FormGroup;

  onSubmit() {
    // this.postService.nouveau_post();

    const formValues = this.userForm.value.title;

    this.postService.nouveau_post(
// tslint:disable-next-line: no-string-literal
      this.userForm.value.title,
      this.userForm.value.content
    );

    setTimeout(() => {
      alert('Informations bien enregistrées!!!');
    }, 2000);

    setTimeout(() => {
      this.router.navigate(['/liste-des-posts']);
    }, 5000);
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.builderForm.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

}
