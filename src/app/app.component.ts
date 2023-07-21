import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  template: `<router-outlet />`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-signals-demo';
}
