import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendar',
  template: `
    <div class="space-y-6">
      <div class="flex justify-between items-center">
        <h2 class="text-2xl font-bold text-gray-800">Calendario</h2>
        <button pButton label="Nuevo Evento" icon="pi pi-plus"></button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <!-- Sidebar con eventos próximos -->
        <div class="lg:col-span-1">
          <p-card header="Próximos Eventos">
            <div class="space-y-4">
              <div *ngFor="let event of upcomingEvents" 
                   class="p-4 bg-gray-50 rounded-lg space-y-2">
                <div class="flex items-center space-x-2">
                  <i class="pi" [ngClass]="event.icon"></i>
                  <span class="font-medium">{{event.title}}</span>
                </div>
                <p class="text-sm text-gray-600">{{event.date | date:'short'}}</p>
                <p class="text-sm text-gray-500">{{event.description}}</p>
              </div>
            </div>
          </p-card>
        </div>

        <!-- Calendario Principal -->
        <div class="lg:col-span-3">
          <p-card>
            <full-calendar [options]="calendarOptions"></full-calendar>
          </p-card>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class CalendarComponent {
  upcomingEvents = [
    {
      title: 'Reunión de Sprint',
      date: new Date('2024-02-10T10:00:00'),
      description: 'Revisión de avances del sprint actual',
      icon: 'pi-users text-blue-500'
    },
    {
      title: 'Entrega de Proyecto',
      date: new Date('2024-02-15T15:00:00'),
      description: 'Presentación final del E-commerce',
      icon: 'pi-flag-fill text-green-500'
    },
    {
      title: 'Capacitación',
      date: new Date('2024-02-20T09:00:00'),
      description: 'Nuevas tecnologías frontend',
      icon: 'pi-book text-purple-500'
    }
  ];

  events = [
    {
      title: 'Reunión de Sprint',
      start: new Date('2024-02-10T10:00:00'),
      end: new Date('2024-02-10T11:30:00'),
      backgroundColor: '#3B82F6'
    },
    {
      title: 'Entrega de Proyecto',
      start: new Date('2024-02-15T15:00:00'),
      end: new Date('2024-02-15T16:30:00'),
      backgroundColor: '#10B981'
    },
    {
      title: 'Capacitación',
      start: new Date('2024-02-20T09:00:00'),
      end: new Date('2024-02-20T13:00:00'),
      backgroundColor: '#8B5CF6'
    }
  ];

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: this.events,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true
  };
} 