import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../../posts.service';
import { Post } from 'src/app/shared/models/post.model';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-create-post-form',
  templateUrl: './create-post-form.component.html',
  styleUrls: ['./create-post-form.component.scss'],
})
export class CreatePostFormComponent {
  posts: Post[] = [];
  createPostForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private postsService: PostsService,
    private usersService: UsersService
  ) {
    this.createPostForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  submitForm(): void {
    const currentUser = this.usersService.getCurrentUser();
    this.posts = this.postsService.getPosts();

    if (currentUser) {
      this.postsService
        .createPost(this.createPostForm.value)
        .subscribe((response) => {
          const { title, body } = response.data?.createPost;

          const newPost: Post = {
            id: String(this.posts.length + 1),
            title: title?.toLowerCase(),
            body,
            user: {
              username: currentUser.userName,
            },
          };

          this.postsService.setPosts([...this.posts, newPost]);
        });
    }
  }

  closeCreatePostForm(): void {
    this.postsService.toggleCreatePostFormState(false);
  }
}
