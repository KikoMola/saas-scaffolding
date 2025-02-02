import { Component } from '@angular/core';
import { NotificationService } from '../../../../core/services/notification.service';

interface PaymentMethod {
  id: string;
  type: string;
  last4: string;
  expiry: string;
  isDefault: boolean;
}

interface Invoice {
  id: string;
  date: Date;
  amount: number;
  status: 'paid' | 'pending' | 'failed';
  downloadUrl: string;
}

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styles: []
})
export class BillingComponent {
  paymentMethods: PaymentMethod[] = [
    {
      id: '1',
      type: 'Visa',
      last4: '4242',
      expiry: '12/24',
      isDefault: true
    },
    {
      id: '2',
      type: 'Mastercard',
      last4: '5555',
      expiry: '08/25',
      isDefault: false
    }
  ];

  invoices: Invoice[] = [
    {
      id: '1',
      date: new Date('2024-02-01'),
      amount: 29.99,
      status: 'paid',
      downloadUrl: '#'
    },
    {
      id: '2',
      date: new Date('2024-01-01'),
      amount: 29.99,
      status: 'paid',
      downloadUrl: '#'
    },
    {
      id: '3',
      date: new Date('2023-12-01'),
      amount: 29.99,
      status: 'paid',
      downloadUrl: '#'
    }
  ];

  constructor(private notificationService: NotificationService) {}

  setDefaultPaymentMethod(method: PaymentMethod): void {
    this.paymentMethods.forEach(m => m.isDefault = false);
    method.isDefault = true;
    this.notificationService.success('Método de pago predeterminado actualizado');
  }

  removePaymentMethod(method: PaymentMethod): void {
    if (method.isDefault) {
      this.notificationService.error('No puedes eliminar el método de pago predeterminado');
      return;
    }
    this.paymentMethods = this.paymentMethods.filter(m => m.id !== method.id);
    this.notificationService.success('Método de pago eliminado');
  }

  downloadInvoice(invoice: Invoice): void {
    // Aquí implementaríamos la descarga real de la factura
    this.notificationService.info('Descargando factura...');
  }

  getStatusSeverity(status: string): 'success' | 'warning' | 'danger' | 'info' {
    switch (status) {
      case 'paid':
        return 'success';
      case 'pending':
        return 'warning';
      case 'failed':
        return 'danger';
      default:
        return 'info';
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'paid':
        return 'Pagado';
      case 'pending':
        return 'Pendiente';
      case 'failed':
        return 'Fallido';
      default:
        return status;
    }
  }
} 