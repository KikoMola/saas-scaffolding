import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
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