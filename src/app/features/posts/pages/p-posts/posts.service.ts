import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  GET_POSTS,
  POST_POST,
  PUT_POST,
  DELETE_POST,
} from './queries/posts.queries';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private apollo: Apollo) {}

  getPosts(limit: number): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: GET_POSTS(limit),
    }).valueChanges;
  }
}
