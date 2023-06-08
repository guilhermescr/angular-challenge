import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { PostsService } from 'src/app/features/posts/pages/p-posts/posts.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: User[] = [];

  private currentUserSubject: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);
  public currentUser: Observable<User | null> =
    this.currentUserSubject.asObservable();

  constructor(private postsService: PostsService, private router: Router) {}

  getUsers(): User[] {
    return this.users;
  }

  setUsers(users: User[]): void {
    this.users = users;
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  saveCurrentUser(user: User | null): void {
    this.currentUserSubject.next(user);
  }

  pushNewUserIntoUsersList(user: User): void {
    this.users.push(user);
  }

  isNewUser(user: User): boolean {
    return this.users.find(($user) => $user.email === user.email) === undefined;
  }

  isLoggedIn(): boolean {
    return this.getCurrentUser() !== null;
  }

  logout(): void {
    const users = this.users.filter(
      (user) => user.email !== this.getCurrentUser()?.email
    );
    this.setUsers(users);
    this.saveCurrentUser(null);
    this.postsService.setPosts([]);
    this.router.navigateByUrl('/login');
  }
}
