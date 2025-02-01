import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FullCalendarModule } from '@fullcalendar/angular';

// PrimeNG
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { TooltipModule } from 'primeng/tooltip';
import { ChartModule } from 'primeng/chart';

// Components
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ReportsComponent } from './pages/reports/reports.component';

const PRIME_MODULES = [
  TableModule,
  CardModule,
  ButtonModule,
  DropdownModule,
  ProgressBarModule,
  TooltipModule,
  ChartModule
];

@NgModule({
  declarations: [
    DashboardComponent,
    ProjectsComponent,
    TasksComponent,
    CalendarComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    DashboardRoutingModule,
    FullCalendarModule,
    ...PRIME_MODULES
  ]
})
export class DashboardModule { }
