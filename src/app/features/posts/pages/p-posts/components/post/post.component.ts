import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() post!: Post;
  @Output() deletePostEvent = new EventEmitter<string>();

  constructor(private route: ActivatedRoute, private router: Router) {}

  linkToPostRoute(postId: string): void {
    this.router.navigate([`post/${postId}`], { relativeTo: this.route });
  }

  fireDeletePostEvent(): void {
    this.deletePostEvent.emit(this.post.id);
  }
}
