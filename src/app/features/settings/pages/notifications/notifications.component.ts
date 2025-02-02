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
  template: `
    <div class="space-y-6">
      <div class="flex justify-between items-center">
        <h2 class="text-2xl font-bold text-gray-800">Notificaciones</h2>
        <button pButton label="Guardar Cambios" icon="pi pi-save" 
                (click)="saveChanges()" [loading]="loading"></button>
      </div>

      <p-card>
        <div class="space-y-6">
          <!-- Canales de Notificación -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-900">Canales de Notificación</h3>
            <p class="text-sm text-gray-500">
              Selecciona cómo quieres recibir las notificaciones para cada tipo de actividad.
            </p>
          </div>

          <!-- Lista de Configuraciones -->
          <div class="space-y-6">
            <div *ngFor="let setting of notificationSettings" class="space-y-4">
              <div class="flex items-start justify-between">
                <div class="space-y-1">
                  <h4 class="text-base font-medium text-gray-900">{{setting.title}}</h4>
                  <p class="text-sm text-gray-500">{{setting.description}}</p>
                </div>
                <div class="flex space-x-4">
                  <div class="flex flex-col items-center space-y-1">
                    <p-inputSwitch [(ngModel)]="setting.email"></p-inputSwitch>
                    <span class="text-xs text-gray-500">Email</span>
                  </div>
                  <div class="flex flex-col items-center space-y-1">
                    <p-inputSwitch [(ngModel)]="setting.push"></p-inputSwitch>
                    <span class="text-xs text-gray-500">Push</span>
                  </div>
                  <div class="flex flex-col items-center space-y-1">
                    <p-inputSwitch [(ngModel)]="setting.sms"></p-inputSwitch>
                    <span class="text-xs text-gray-500">SMS</span>
                  </div>
                </div>
              </div>
              <p-divider></p-divider>
            </div>
          </div>

          <!-- Horarios Silenciosos -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-900">Horarios Silenciosos</h3>
            <p class="text-sm text-gray-500">
              Configura períodos de tiempo durante los cuales no recibirás notificaciones.
            </p>
            <div class="flex items-center space-x-4">
              <p-inputSwitch [(ngModel)]="quietHoursEnabled" 
                            (onChange)="toggleQuietHours()"></p-inputSwitch>
              <span class="text-sm text-gray-700">
                {{ quietHoursEnabled ? 'Activado' : 'Desactivado' }}
              </span>
            </div>
          </div>
        </div>
      </p-card>
    </div>
  `,
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