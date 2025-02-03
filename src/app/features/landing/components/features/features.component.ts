import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styles: []
})
export class FeaturesComponent {
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
} 