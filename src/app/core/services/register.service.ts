import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/users.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(
    private usersService: UsersService,
    private loginService: LoginService
  ) {}

  signUp(user: User): void {
    this.usersService.pushNewUserIntoUsersList(user);
    this.loginService.logIn(user);
  }
}
