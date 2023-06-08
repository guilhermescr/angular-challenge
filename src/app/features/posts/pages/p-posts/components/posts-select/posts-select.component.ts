import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-posts-select',
  templateUrl: './posts-select.component.html',
  styleUrls: ['./posts-select.component.scss'],
})
export class PostsSelectComponent {
  @Output() getPostsEvent = new EventEmitter<number>();
  postsAmount: number = 0;

  fireGetPosts(): void {
    // postsAmount is a string by default, because it comes from a HTML Element.
    this.getPostsEvent.emit(Number(this.postsAmount));
  }
}
