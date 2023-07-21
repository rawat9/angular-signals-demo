import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatCardModule],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  #userService = inject(UserService);

  users = this.#userService.users;

  selectedUserId = this.#userService.selectedUserId;

  onSelected(userId: number) {
    this.#userService.setSelectedUserId(userId);
  }
}
