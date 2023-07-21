import { DestroyRef, effect, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed, toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Todo } from '../types/todo';
import { UserService } from './user.service';
import { catchError, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  #http = inject(HttpClient);
  #userService = inject(UserService);
  #url = 'https://jsonplaceholder.typicode.com/todos?userId=';

  userTodos = signal<Todo[]>([]);
  destroyRef = inject(DestroyRef); // Current "context" (this component)
  tasksEffect = effect(() =>
    this.#http
      .get<Todo[]>(this.#url + this.#userService.selectedUserId())
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        catchError(() => of([] as Todo[])),
      )
      .subscribe((todos) => this.userTodos.set(todos)),
  );

  // #todos$ = toObservable(this.#userService.selectedUserId).pipe(
  //   switchMap((userId) =>
  //     this.#http.get<Todo[]>(this.#url + userId).pipe(tap((todos) => this.userTodos.set(todos))),
  //   ),
  // );
  //
  // readonlyTodos = toSignal(this.#todos$, { initialValue: [] as Todo[] });

  public markComplete(todo: Todo) {
    this.userTodos.mutate(() => (todo.completed = true));
  }
}
