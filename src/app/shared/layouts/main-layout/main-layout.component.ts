import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
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