import { Component } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-p-posts',
  templateUrl: './p-posts.component.html',
  styleUrls: ['./p-posts.component.scss'],
})
export class PPostsComponent {
  postsAmount: number = 0;
  posts: any[] = [];

  constructor(private postsService: PostsService) {}

  getPosts(): void {
    this.postsService.getPosts(this.postsAmount).subscribe((data) => {
      this.posts = data.data.posts.data;
      console.log(data.data.posts.data);
    });
  }
}
