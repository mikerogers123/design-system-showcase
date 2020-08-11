import { Component } from '@angular/core';
import { MenuItem } from '@ukho/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'design-system-showcase';

  readonly breadcrumbs: MenuItem[] = [];
}
