import { Component } from '@angular/core';

interface Project {
  id: number;
  name: string;
  description: string;
  status: string;
  progress: number;
  team: string[];
  deadline: Date;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [`
    .status-badge {
      @apply px-3 py-1 rounded-full text-sm font-medium;
    }
    .status-active {
      @apply bg-green-100 text-green-800;
    }
    .status-pending {
      @apply bg-yellow-100 text-yellow-800;
    }
    .status-completed {
      @apply bg-blue-100 text-blue-800;
    }
    .status-cancelled {
      @apply bg-red-100 text-red-800;
    }
  `]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      name: 'E-commerce Platform',
      description: 'Desarrollo de plataforma de comercio electrónico',
      status: 'Active',
      progress: 75,
      team: ['Juan P.', 'María S.', 'Carlos R.'],
      deadline: new Date('2024-03-15')
    },
    {
      id: 2,
      name: 'CRM System',
      description: 'Sistema de gestión de relaciones con clientes',
      status: 'Pending',
      progress: 30,
      team: ['Ana L.', 'Pedro M.'],
      deadline: new Date('2024-04-01')
    },
    {
      id: 3,
      name: 'Mobile App',
      description: 'Aplicación móvil para delivery',
      status: 'Completed',
      progress: 100,
      team: ['Luis G.', 'Sofia B.', 'Diego M.', 'Elena R.'],
      deadline: new Date('2024-02-28')
    }
  ];

  editProject(project: Project): void {
    // Implementar edición
    console.log('Editar proyecto:', project);
  }

  deleteProject(project: Project): void {
    // Implementar eliminación
    console.log('Eliminar proyecto:', project);
  }
} 