import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private messageService: MessageService) {}

  success(message: string, title: string = 'Éxito'): void {
    this.messageService.add({
      severity: 'success',
      summary: title,
      detail: message
    });
  }

  error(message: string, title: string = 'Error'): void {
    this.messageService.add({
      severity: 'error',
      summary: title,
      detail: message
    });
  }

  info(message: string, title: string = 'Información'): void {
    this.messageService.add({
      severity: 'info',
      summary: title,
      detail: message
    });
  }

  warn(message: string, title: string = 'Advertencia'): void {
    this.messageService.add({
      severity: 'warn',
      summary: title,
      detail: message
    });
  }
}
