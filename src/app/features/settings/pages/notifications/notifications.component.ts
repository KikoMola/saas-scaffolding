import { Component } from '@angular/core';
import { NotificationService } from '../../../../core/services/notification.service';

interface NotificationSetting {
  id: string;
  title: string;
  description: string;
  email: boolean;
  push: boolean;
  sms: boolean;
}

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styles: []
})
export class NotificationsComponent {
  loading = false;
  quietHoursEnabled = false;
  
  notificationSettings: NotificationSetting[] = [
    {
      id: '1',
      title: 'Actualizaciones del Sistema',
      description: 'Recibe notificaciones sobre actualizaciones y mantenimiento del sistema.',
      email: true,
      push: true,
      sms: false
    },
    {
      id: '2',
      title: 'Seguridad',
      description: 'Alertas de seguridad y actividad sospechosa en tu cuenta.',
      email: true,
      push: true,
      sms: true
    },
    {
      id: '3',
      title: 'Recordatorios',
      description: 'Recordatorios de tareas pendientes y eventos próximos.',
      email: true,
      push: false,
      sms: false
    },
    {
      id: '4',
      title: 'Mensajes',
      description: 'Notificaciones de mensajes nuevos y menciones.',
      email: false,
      push: true,
      sms: false
    }
  ];

  constructor(private notificationService: NotificationService) {}

  saveChanges(): void {
    this.loading = true;
    // Aquí enviaríamos los datos al backend
    setTimeout(() => {
      this.loading = false;
      this.notificationService.success('Preferencias de notificación actualizadas');
    }, 1500);
  }

  toggleQuietHours(): void {
    this.notificationService.info(
      this.quietHoursEnabled 
        ? 'Horarios silenciosos activados' 
        : 'Horarios silenciosos desactivados'
    );
  }
} 