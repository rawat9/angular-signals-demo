import { Route } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { BasicComponent } from './pages/basic/basic.component';

export const appRoutes: Route[] = [
  {
    path: 'basic',
    component: BasicComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
];
