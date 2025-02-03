import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styles: []
})
export class LandingComponent {
  features = [
    {
      icon: 'pi pi-chart-line',
      title: 'Gestión de Proyectos',
      description: 'Gestiona tus proyectos de manera eficiente con herramientas intuitivas y visuales.'
    },
    {
      icon: 'pi pi-check-square',
      title: 'Seguimiento de Tareas',
      description: 'Mantén un registro detallado de todas las tareas y su progreso en tiempo real.'
    },
    {
      icon: 'pi pi-users',
      title: 'Colaboración en Equipo',
      description: 'Facilita la comunicación y colaboración entre los miembros del equipo.'
    },
    {
      icon: 'pi pi-calendar',
      title: 'Calendario Compartido',
      description: 'Coordina eventos y deadlines con un calendario compartido para todo el equipo.'
    },
    {
      icon: 'pi pi-chart-bar',
      title: 'Reportes Detallados',
      description: 'Obtén insights valiosos con reportes y análisis detallados del rendimiento.'
    },
    {
      icon: 'pi pi-shield',
      title: 'Seguridad Avanzada',
      description: 'Protege tu información con características avanzadas de seguridad y autenticación.'
    }
  ];

  plans = [
    {
      name: 'Básico',
      price: '9.99',
      features: [
        'Hasta 5 proyectos',
        'Hasta 10 usuarios',
        'Almacenamiento básico',
        'Soporte por email'
      ],
      recommended: false
    },
    {
      name: 'Pro',
      price: '29.99',
      features: [
        'Proyectos ilimitados',
        'Hasta 50 usuarios',
        'Almacenamiento ampliado',
        'Soporte prioritario',
        'Reportes avanzados',
        'API access'
      ],
      recommended: true
    },
    {
      name: 'Enterprise',
      price: '99.99',
      features: [
        'Todo lo de Pro',
        'Usuarios ilimitados',
        'Almacenamiento ilimitado',
        'Soporte 24/7',
        'Personalización completa',
        'SLA garantizado'
      ],
      recommended: false
    }
  ];

  constructor(private router: Router) {}

  navigateToRegister(): void {
    this.router.navigate(['/auth/register']);
  }

  navigateToLogin(): void {
    this.router.navigate(['/auth/login']);
  }
} 