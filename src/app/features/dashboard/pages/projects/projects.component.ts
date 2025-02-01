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
  template: `
    <div class="space-y-6">
      <div class="flex justify-between items-center">
        <h2 class="text-2xl font-bold text-gray-800">Proyectos</h2>
        <button pButton label="Nuevo Proyecto" icon="pi pi-plus"></button>
      </div>

      <p-table [value]="projects" [paginator]="true" [rows]="10" [responsive]="true">
        <ng-template pTemplate="header">
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Estado</th>
            <th>Progreso</th>
            <th>Equipo</th>
            <th>Fecha Límite</th>
            <th>Acciones</th>
          </tr>
        </ng-template>
        <ng-template pTemplate="body" let-project>
          <tr>
            <td>{{project.name}}</td>
            <td>{{project.description}}</td>
            <td>
              <span [class]="'status-badge status-' + project.status.toLowerCase()">
                {{project.status}}
              </span>
            </td>
            <td>
              <p-progressBar [value]="project.progress"></p-progressBar>
            </td>
            <td>
              <div class="flex -space-x-2">
                <div *ngFor="let member of project.team" 
                     class="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"
                     [pTooltip]="member">
                  {{member[0]}}
                </div>
              </div>
            </td>
            <td>{{project.deadline | date}}</td>
            <td>
              <button pButton icon="pi pi-pencil" 
                      class="p-button-text p-button-rounded"
                      (click)="editProject(project)"></button>
              <button pButton icon="pi pi-trash" 
                      class="p-button-text p-button-rounded p-button-danger"
                      (click)="deleteProject(project)"></button>
            </td>
          </tr>
        </ng-template>
      </p-table>
    </div>
  `,
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