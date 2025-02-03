import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
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