import { Component, computed, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { TodoService } from '../../services/todo.service';
import { MatButtonModule } from '@angular/material/button';
import { Todo } from '../../types/todo';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule, MatButtonModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  displayedColumns: string[] = ['title', 'completed', 'action'];

  #todoService = inject(TodoService);
  todos = this.#todoService.userTodos;

  completedCount = computed(() => this.todos().filter((todo) => todo.completed).length);
  pageTitle = computed(() => `User Todos - ${this.completedCount()} completed`);

  constructor() {
    effect(() => {
      // console.log(this.todos());
    });
  }

  public markComplete(task: Todo) {
    this.#todoService.markComplete(task);
  }
}
