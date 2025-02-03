import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
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