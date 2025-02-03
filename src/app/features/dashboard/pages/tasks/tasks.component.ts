import { Component } from '@angular/core';

interface Task {
  id: number;
  title: string;
  description: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Pending' | 'In Progress' | 'Completed';
  assignee: string;
  dueDate: Date;
  project: string;
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styles: [`
    .priority-badge {
      @apply px-3 py-1 rounded-full text-sm font-medium;
    }
    .priority-high {
      @apply bg-red-100 text-red-800;
    }
    .priority-medium {
      @apply bg-yellow-100 text-yellow-800;
    }
    .priority-low {
      @apply bg-green-100 text-green-800;
    }
    .status-badge {
      @apply px-3 py-1 rounded-full text-sm font-medium;
    }
    .status-pending {
      @apply bg-gray-100 text-gray-800;
    }
    .status-in-progress {
      @apply bg-blue-100 text-blue-800;
    }
    .status-completed {
      @apply bg-green-100 text-green-800;
    }
  `]
})
export class TasksComponent {
  filterOptions = [
    { label: 'Todas', value: 'all' },
    { label: 'Pendientes', value: 'Pending' },
    { label: 'En Progreso', value: 'In Progress' },
    { label: 'Completadas', value: 'Completed' }
  ];

  selectedFilter: string = 'all';

  tasks: Task[] = [
    {
      id: 1,
      title: 'Diseñar interfaz de usuario',
      description: 'Crear mockups y prototipos',
      priority: 'High',
      status: 'In Progress',
      assignee: 'María S.',
      dueDate: new Date('2024-02-15'),
      project: 'E-commerce Platform'
    },
    {
      id: 2,
      title: 'Implementar autenticación',
      description: 'Integrar sistema de login y registro',
      priority: 'High',
      status: 'Pending',
      assignee: 'Carlos R.',
      dueDate: new Date('2024-02-20'),
      project: 'CRM System'
    },
    {
      id: 3,
      title: 'Optimizar rendimiento',
      description: 'Mejorar tiempo de carga',
      priority: 'Medium',
      status: 'Completed',
      assignee: 'Ana L.',
      dueDate: new Date('2024-02-10'),
      project: 'Mobile App'
    }
  ];

  get filteredTasks(): Task[] {
    if (this.selectedFilter === 'all') {
      return this.tasks;
    }
    return this.tasks.filter(task => task.status === this.selectedFilter);
  }

  editTask(task: Task): void {
    // Implementar edición
    console.log('Editar tarea:', task);
  }

  deleteTask(task: Task): void {
    // Implementar eliminación
    console.log('Eliminar tarea:', task);
  }
} 