import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  currentUser: User | null = null;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.currentUser.subscribe(($currentUser) => {
      this.currentUser = $currentUser;
    });
  }
}
