import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  template: `
    <div class="min-h-screen">
      <router-outlet></router-outlet>
      <p-toast position="top-right"></p-toast>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'SAAS Platform';
}
