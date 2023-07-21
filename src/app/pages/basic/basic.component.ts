import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>{{ fullName() }} <button (click)="setName('John')">Click</button></div>
    <br />
    <div>
      <button (click)="increment()">Increment</button>
      <h2>Count is {{ count() }}</h2>
      <h1>Double is {{ double() }}</h1>
    </div>
  `,
  styleUrls: ['./basic.component.scss'],
})
export class BasicComponent {
  firstName = signal('Jane');
  lastName = signal('Doe');
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  count = signal(1);
  double = computed(() => this.count() * 2);

  increment() {
    this.count.update((value) => value + 1);
  }

  constructor() {
    effect(() => console.log('FullName changed:', this.fullName()));
  }

  // its not stream emission
  setName(newName: string) {
    this.firstName.set(newName); // changed

    setTimeout(() => {
      console.log('Delayed for 3 second.');
    }, 3000);

    this.firstName.set('Jerry'); // changed again!!
    this.firstName.set('XYZ'); // yet again!!
  }
}
