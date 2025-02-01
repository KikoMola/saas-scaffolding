import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  template: `
    <div class="space-y-6">
      <div class="flex justify-between items-center">
        <h2 class="text-2xl font-bold text-gray-800">Reportes</h2>
        <div class="space-x-2">
          <p-dropdown [options]="periodOptions" [(ngModel)]="selectedPeriod" 
                     placeholder="Seleccionar período"></p-dropdown>
          <button pButton label="Exportar" icon="pi pi-download"></button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- KPIs -->
        <p-card>
          <div class="text-center">
            <h3 class="text-lg font-semibold mb-2">Tareas Completadas</h3>
            <div class="text-4xl font-bold text-green-600">85%</div>
            <p class="text-sm text-gray-500 mt-2">+15% vs mes anterior</p>
          </div>
        </p-card>

        <p-card>
          <div class="text-center">
            <h3 class="text-lg font-semibold mb-2">Proyectos Activos</h3>
            <div class="text-4xl font-bold text-blue-600">12</div>
            <p class="text-sm text-gray-500 mt-2">3 nuevos este mes</p>
          </div>
        </p-card>

        <p-card>
          <div class="text-center">
            <h3 class="text-lg font-semibold mb-2">Tiempo Promedio</h3>
            <div class="text-4xl font-bold text-purple-600">4.2d</div>
            <p class="text-sm text-gray-500 mt-2">Por tarea completada</p>
          </div>
        </p-card>

        <!-- Gráficos -->
        <div class="lg:col-span-2">
          <p-card header="Progreso de Proyectos">
            <p-chart type="bar" [data]="projectProgressData" [options]="chartOptions"></p-chart>
          </p-card>
        </div>

        <div class="lg:col-span-1">
          <p-card header="Distribución de Tareas">
            <p-chart type="pie" [data]="taskDistributionData" [options]="pieOptions"></p-chart>
          </p-card>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ReportsComponent {
  periodOptions = [
    { label: 'Último Mes', value: 'month' },
    { label: 'Último Trimestre', value: 'quarter' },
    { label: 'Último Año', value: 'year' }
  ];

  selectedPeriod = 'month';

  projectProgressData = {
    labels: ['E-commerce', 'CRM', 'Mobile App', 'Dashboard', 'API'],
    datasets: [
      {
        label: 'Progreso (%)',
        data: [65, 45, 85, 30, 55],
        backgroundColor: '#3B82F6'
      }
    ]
  };

  taskDistributionData = {
    labels: ['Completadas', 'En Progreso', 'Pendientes'],
    datasets: [
      {
        data: [45, 35, 20],
        backgroundColor: ['#10B981', '#3B82F6', '#F59E0B']
      }
    ]
  };

  chartOptions = {
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  };

  pieOptions = {
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  };
} 