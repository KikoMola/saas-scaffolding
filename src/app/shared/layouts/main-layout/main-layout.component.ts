import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-main-layout',
  template: `
    <div class="min-h-screen bg-gray-100">
      <!-- Header -->
      <header class="bg-white shadow-sm">
        <div class="mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex">
              <div class="flex-shrink-0 flex items-center">
                <h1 class="text-2xl font-bold text-gray-900">Mi SAAS</h1>
              </div>
            </div>
            <div class="flex items-center">
              <p-menu #menu [model]="userMenuItems" [popup]="true"></p-menu>
              <button 
                pButton 
                type="button" 
                icon="pi pi-user"
                class="p-button-rounded p-button-text"
                (click)="menu.toggle($event)"
              ></button>
            </div>
          </div>
        </div>
      </header>

      <div class="flex">
        <!-- Sidebar -->
        <aside class="w-64 bg-white shadow-md h-[calc(100vh-4rem)]">
          <nav class="mt-5 px-2">
            <p-menu [model]="menuItems"></p-menu>
          </nav>
        </aside>

        <!-- Main content -->
        <main class="flex-1 p-8">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,
  styles: []
})
export class MainLayoutComponent {
  menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'pi pi-home',
      routerLink: '/dashboard'
    },
    {
      label: 'Proyectos',
      icon: 'pi pi-folder',
      routerLink: '/dashboard/projects'
    },
    {
      label: 'Tareas',
      icon: 'pi pi-check-square',
      routerLink: '/dashboard/tasks'
    },
    {
      label: 'Calendario',
      icon: 'pi pi-calendar',
      routerLink: '/dashboard/calendar'
    },
    {
      label: 'Reportes',
      icon: 'pi pi-chart-bar',
      routerLink: '/dashboard/reports'
    }
  ];

  userMenuItems: MenuItem[] = [
    {
      label: 'Perfil',
      icon: 'pi pi-user-edit',
      routerLink: '/settings/profile'
    },
    {
      label: 'Configuración',
      icon: 'pi pi-cog',
      routerLink: '/settings'
    },
    {
      separator: true
    },
    {
      label: 'Cerrar Sesión',
      icon: 'pi pi-power-off',
      command: () => this.logout()
    }
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
} 