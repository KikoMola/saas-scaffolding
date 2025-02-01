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
  template: `
    <div class="space-y-6">
      <div class="flex justify-between items-center">
        <h2 class="text-2xl font-bold text-gray-800">Tareas</h2>
        <div class="space-x-2">
          <p-dropdown [options]="filterOptions" [(ngModel)]="selectedFilter" 
                     placeholder="Filtrar por estado"></p-dropdown>
          <button pButton label="Nueva Tarea" icon="pi pi-plus"></button>
        </div>
      </div>

      <p-table [value]="filteredTasks" [paginator]="true" [rows]="10" [responsive]="true">
        <ng-template pTemplate="header">
          <tr>
            <th>Título</th>
            <th>Proyecto</th>
            <th>Prioridad</th>
            <th>Estado</th>
            <th>Asignado a</th>
            <th>Fecha límite</th>
            <th>Acciones</th>
          </tr>
        </ng-template>
        <ng-template pTemplate="body" let-task>
          <tr>
            <td>
              <div class="font-medium">{{task.title}}</div>
              <div class="text-sm text-gray-500">{{task.description}}</div>
            </td>
            <td>{{task.project}}</td>
            <td>
              <span [class]="'priority-badge priority-' + task.priority.toLowerCase()">
                {{task.priority}}
              </span>
            </td>
            <td>
              <span [class]="'status-badge status-' + task.status.toLowerCase().replace(' ', '-')">
                {{task.status}}
              </span>
            </td>
            <td>
              <div class="flex items-center space-x-2">
                <div class="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                  {{task.assignee[0]}}
                </div>
                <span>{{task.assignee}}</span>
              </div>
            </td>
            <td>{{task.dueDate | date}}</td>
            <td>
              <button pButton icon="pi pi-pencil" 
                      class="p-button-text p-button-rounded"
                      (click)="editTask(task)"></button>
              <button pButton icon="pi pi-trash" 
                      class="p-button-text p-button-rounded p-button-danger"
                      (click)="deleteTask(task)"></button>
            </td>
          </tr>
        </ng-template>
      </p-table>
    </div>
  `,
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