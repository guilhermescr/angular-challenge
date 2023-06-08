import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models/post.model';

@Pipe({
  name: 'filterPosts',
})
export class FilterPostsPipe implements PipeTransform {
  transform(posts: Post[], searchTerm: string): Post[] {
    searchTerm = searchTerm.toLowerCase().trim();

    if (!searchTerm) return posts;

    return posts.filter((post) => post.title.includes(searchTerm));
  }
}
