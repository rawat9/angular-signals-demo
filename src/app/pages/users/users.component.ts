import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from "@angular/material/grid-list";
import {UsersListComponent} from "../../components/users-list/users-list.component";
import {TodoListComponent} from "../../components/todo-list/todo-list.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, MatGridListModule, UsersListComponent, TodoListComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {}
