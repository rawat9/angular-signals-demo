import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/user';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  #http = inject(HttpClient);
  #userUrl = 'https://jsonplaceholder.typicode.com/users';

  #users$: Observable<User[]> = this.#http.get<User[]>(this.#userUrl);

  selectedUserId = signal(0);

  // toSignal auto subscribes and unsubscribes
  public users = toSignal(this.#users$, { initialValue: [] as User[] });

  public setSelectedUserId(id: number) {
    this.selectedUserId.set(id);
  }
}
