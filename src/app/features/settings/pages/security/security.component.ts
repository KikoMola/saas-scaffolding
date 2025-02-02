import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-security',
  template: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold text-gray-800">Seguridad</h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Cambiar Contraseña -->
        <p-card header="Cambiar Contraseña">
          <form [formGroup]="passwordForm" (ngSubmit)="changePassword()" class="space-y-4">
            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700">Contraseña Actual</label>
              <p-password formControlName="currentPassword" [toggleMask]="true" 
                         styleClass="w-full" [feedback]="false"></p-password>
              <small class="text-red-500" 
                     *ngIf="passwordForm.get('currentPassword')?.errors?.['required'] && 
                           passwordForm.get('currentPassword')?.touched">
                La contraseña actual es requerida
              </small>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700">Nueva Contraseña</label>
              <p-password formControlName="newPassword" [toggleMask]="true" 
                         styleClass="w-full"></p-password>
              <small class="text-red-500" 
                     *ngIf="passwordForm.get('newPassword')?.errors?.['required'] && 
                           passwordForm.get('newPassword')?.touched">
                La nueva contraseña es requerida
              </small>
              <small class="text-red-500" 
                     *ngIf="passwordForm.get('newPassword')?.errors?.['minlength'] && 
                           passwordForm.get('newPassword')?.touched">
                La contraseña debe tener al menos 8 caracteres
              </small>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700">Confirmar Nueva Contraseña</label>
              <p-password formControlName="confirmPassword" [toggleMask]="true" 
                         styleClass="w-full" [feedback]="false"></p-password>
              <small class="text-red-500" 
                     *ngIf="passwordForm.get('confirmPassword')?.errors?.['required'] && 
                           passwordForm.get('confirmPassword')?.touched">
                La confirmación de contraseña es requerida
              </small>
              <small class="text-red-500" 
                     *ngIf="passwordForm.errors?.['passwordMismatch'] && 
                           passwordForm.get('confirmPassword')?.touched">
                Las contraseñas no coinciden
              </small>
            </div>

            <button pButton type="submit" label="Cambiar Contraseña" 
                    [loading]="loading"></button>
          </form>
        </p-card>

        <!-- Autenticación de Dos Factores -->
        <p-card header="Autenticación de Dos Factores">
          <div class="space-y-4">
            <p class="text-gray-600">
              La autenticación de dos factores añade una capa extra de seguridad a tu cuenta.
              Cada vez que inicies sesión, necesitarás introducir un código además de tu contraseña.
            </p>

            <div class="flex items-center justify-between">
              <div>
                <h4 class="font-medium">Estado</h4>
                <p class="text-sm text-gray-500">
                  {{ twoFactorEnabled ? 'Activado' : 'Desactivado' }}
                </p>
              </div>
              <p-inputSwitch [(ngModel)]="twoFactorEnabled" 
                            (onChange)="toggleTwoFactor()"></p-inputSwitch>
            </div>

            <div *ngIf="twoFactorEnabled" class="space-y-4">
              <p-divider></p-divider>
              
              <div class="space-y-2">
                <h4 class="font-medium">Aplicaciones Autenticadoras</h4>
                <p class="text-sm text-gray-500">
                  Configura una aplicación autenticadora como Google Authenticator, 
                  Microsoft Authenticator o Authy.
                </p>
              </div>

              <div class="space-y-2">
                <h4 class="font-medium">Códigos de Respaldo</h4>
                <p class="text-sm text-gray-500">
                  Genera códigos de respaldo para acceder a tu cuenta si pierdes 
                  acceso a tu dispositivo.
                </p>
                <button pButton type="button" label="Generar Códigos" 
                        class="p-button-outlined"></button>
              </div>
            </div>
          </div>
        </p-card>
      </div>
    </div>
  `,
  styles: []
})
export class SecurityComponent {
  passwordForm: FormGroup;
  loading = false;
  twoFactorEnabled = false;

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService
  ) {
    this.passwordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('newPassword')?.value === g.get('confirmPassword')?.value
      ? null
      : { passwordMismatch: true };
  }

  changePassword(): void {
    if (this.passwordForm.invalid) {
      Object.keys(this.passwordForm.controls).forEach(key => {
        const control = this.passwordForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
      return;
    }

    this.loading = true;
    // Aquí enviaríamos los datos al backend
    setTimeout(() => {
      this.loading = false;
      this.notificationService.success('Contraseña actualizada correctamente');
      this.passwordForm.reset();
    }, 1500);
  }

  toggleTwoFactor(): void {
    // Aquí manejaríamos la activación/desactivación del 2FA
    this.notificationService.success(
      this.twoFactorEnabled 
        ? 'Autenticación de dos factores activada' 
        : 'Autenticación de dos factores desactivada'
    );
  }
} 