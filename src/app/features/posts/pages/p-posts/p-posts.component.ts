import { Component } from '@angular/core';
import { PostsService } from './posts.service';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-p-posts',
  templateUrl: './p-posts.component.html',
  styleUrls: ['./p-posts.component.scss'],
})
export class PPostsComponent {
  posts: Post[] = [];
  isLoading: boolean = false;
  createPostFormState: boolean = false;
  searchTerm = '';

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.posts.subscribe((posts) => {
      this.posts = posts;
    });

    this.postsService.createPostFormState.subscribe((currentState) => {
      this.createPostFormState = currentState;
    });
  }

  getPosts(postsAmount: number): void {
    if (!postsAmount) {
      this.postsService.setPosts([]);
      this.isLoading = false;
      return;
    }
    this.isLoading = true;

    setTimeout(() => {
      this.postsService.fetchPosts(postsAmount).subscribe((response) => {
        this.postsService.setPosts(response.data.posts.data);
        this.isLoading = false;
      });
    }, 500);
  }

  deletePost(postId: string): void {
    const filteredPosts = this.posts.filter(({ id }) => id !== postId);
    this.postsService.setPosts(filteredPosts);
  }

  openCreatePostForm(): void {
    this.postsService.toggleCreatePostFormState(true);
  }
}
