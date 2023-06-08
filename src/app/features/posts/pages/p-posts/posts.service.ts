import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  GET_POSTS,
  POST_POST,
  PUT_POST,
  DELETE_POST,
  GET_POST,
} from './queries/posts.queries';
import { Post } from 'src/app/shared/models/post.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private postsSubject: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>(
    []
  );
  public posts: Observable<Post[]> = this.postsSubject.asObservable();

  private createPostFormStateSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public createPostFormState: Observable<boolean> =
    this.createPostFormStateSubject.asObservable();

  constructor(private apollo: Apollo) {}

  fetchPosts(limit: number): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: GET_POSTS(limit),
    }).valueChanges;
  }

  getPost(id: string): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: GET_POST,
      variables: { id },
    }).valueChanges;
  }

  getPosts(): Post[] {
    return this.postsSubject.value;
  }

  createPost({
    title,
    body,
  }: {
    title: string;
    body: string;
  }): Observable<any> {
    return this.apollo.mutate<{
      createPost: Post;
    }>({
      mutation: POST_POST,
      variables: {
        input: {
          title,
          body,
        },
      },
    });
  }

  setPosts(data: Post[]): void {
    this.postsSubject.next(data);
  }

  toggleCreatePostFormState(newValue: boolean) {
    this.createPostFormStateSubject.next(newValue);
  }
}
