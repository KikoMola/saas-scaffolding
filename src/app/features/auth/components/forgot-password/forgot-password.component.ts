import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-forgot-password',
  template: `
    <div class="flex min-h-screen bg-gray-100">
      <div class="m-auto w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">Recuperar Contraseña</h2>
        
        <form [formGroup]="forgotPasswordForm" (ngSubmit)="onSubmit()" class="space-y-6">
          <div class="space-y-2">
            <label for="email" class="text-sm font-medium text-gray-700">Email</label>
            <input
              pInputText
              id="email"
              type="email"
              formControlName="email"
              class="w-full"
              [ngClass]="{'ng-invalid ng-dirty': submitted && forgotPasswordForm.get('email')?.errors}"
            />
            <small class="text-red-500" *ngIf="submitted && forgotPasswordForm.get('email')?.errors?.['required']">
              El email es requerido
            </small>
            <small class="text-red-500" *ngIf="submitted && forgotPasswordForm.get('email')?.errors?.['email']">
              El email no es válido
            </small>
          </div>

          <button
            pButton
            type="submit"
            label="Enviar instrucciones"
            class="w-full"
            [loading]="loading"
          ></button>

          <div class="text-center">
            <a
              routerLink="/auth/login"
              class="text-sm text-blue-600 hover:text-blue-800"
            >
              Volver al inicio de sesión
            </a>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: []
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.forgotPasswordForm.invalid) {
      return;
    }

    this.loading = true;
    const { email } = this.forgotPasswordForm.value;

    this.authService.forgotPassword(email).subscribe({
      next: () => {
        this.notificationService.success('Se han enviado las instrucciones a tu email');
        this.router.navigate(['/auth/login']);
      },
      error: (error) => {
        this.notificationService.error(error.message || 'Error al procesar la solicitud');
        this.loading = false;
      }
    });
  }
}
