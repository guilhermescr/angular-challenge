import { Component } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';
import { PostsService } from '../../posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.scss'],
})
export class FullPostComponent {
  post!: Post;
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.isLoading = true;

    if (id) {
      setTimeout(() => {
        this.postsService.getPost(id).subscribe((post) => {
          this.post = post.data.post;
          this.isLoading = false;
        });
      }, 500);
    }
  }
}
