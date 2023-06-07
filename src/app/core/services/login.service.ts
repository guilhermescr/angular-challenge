import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/users.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private usersService: UsersService, private router: Router) {}

  logIn(user: User): void {
    if (!this.usersService.isNewUser(user)) {
      this.usersService.saveCurrentUser(user);
      console.log('Logged in!');

      this.router.navigateByUrl('/home');
    } else {
      alert('ERROR: Account not found. Please, check if the email and password are correct.');
    }
  }
}
