import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styles: []
})
export class PricingComponent {
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
} 