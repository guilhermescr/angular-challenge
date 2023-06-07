import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: User[] = [];

  // set it to null
  private currentUserSubject: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>({
      email: 'gui@gmail.com',
      userName: 'guiscr',
      password: 'gui123',
    });
  public currentUser: Observable<User | null> =
    this.currentUserSubject.asObservable();

  constructor() {}

  getUsers(): User[] {
    return this.users;
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  saveCurrentUser(user: User): void {
    this.currentUserSubject.next(user);
  }

  pushNewUserIntoUsersList(user: User): void {
    this.users.push(user);
  }

  isNewUser(user: User): boolean {
    return (
      this.users.find(
        ($user) =>
          $user.email === user.email && $user.password === user.password
      ) === undefined
    );
  }

  isLoggedIn(): boolean {
    return this.getCurrentUser() !== null;
  }
}
