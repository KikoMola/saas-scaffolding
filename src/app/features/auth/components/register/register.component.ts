import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-register',
  template: `
    <div class="flex min-h-screen bg-gray-100">
      <div class="m-auto w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">Registro</h2>
        
        <form [formGroup]="registerForm" (ngSubmit)="onSubmit()" class="space-y-6">
          <div class="space-y-2">
            <label for="name" class="text-sm font-medium text-gray-700">Nombre</label>
            <input
              pInputText
              id="name"
              type="text"
              formControlName="name"
              class="w-full"
              [ngClass]="{'ng-invalid ng-dirty': submitted && registerForm.get('name')?.errors}"
            />
            <small class="text-red-500" *ngIf="submitted && registerForm.get('name')?.errors?.['required']">
              El nombre es requerido
            </small>
          </div>

          <div class="space-y-2">
            <label for="email" class="text-sm font-medium text-gray-700">Email</label>
            <input
              pInputText
              id="email"
              type="email"
              formControlName="email"
              class="w-full"
              [ngClass]="{'ng-invalid ng-dirty': submitted && registerForm.get('email')?.errors}"
            />
            <small class="text-red-500" *ngIf="submitted && registerForm.get('email')?.errors?.['required']">
              El email es requerido
            </small>
            <small class="text-red-500" *ngIf="submitted && registerForm.get('email')?.errors?.['email']">
              El email no es válido
            </small>
          </div>

          <div class="space-y-2">
            <label for="password" class="text-sm font-medium text-gray-700">Contraseña</label>
            <input
              pInputText
              id="password"
              type="password"
              formControlName="password"
              class="w-full"
              [ngClass]="{'ng-invalid ng-dirty': submitted && registerForm.get('password')?.errors}"
            />
            <small class="text-red-500" *ngIf="submitted && registerForm.get('password')?.errors?.['required']">
              La contraseña es requerida
            </small>
            <small class="text-red-500" *ngIf="submitted && registerForm.get('password')?.errors?.['minlength']">
              La contraseña debe tener al menos 6 caracteres
            </small>
          </div>

          <div class="space-y-2">
            <label for="confirmPassword" class="text-sm font-medium text-gray-700">Confirmar Contraseña</label>
            <input
              pInputText
              id="confirmPassword"
              type="password"
              formControlName="confirmPassword"
              class="w-full"
              [ngClass]="{'ng-invalid ng-dirty': submitted && registerForm.get('confirmPassword')?.errors}"
            />
            <small class="text-red-500" *ngIf="submitted && registerForm.get('confirmPassword')?.errors?.['required']">
              La confirmación de contraseña es requerida
            </small>
            <small class="text-red-500" *ngIf="submitted && registerForm.get('confirmPassword')?.errors?.['passwordMismatch']">
              Las contraseñas no coinciden
            </small>
          </div>

          <button
            pButton
            type="submit"
            label="Registrarse"
            class="w-full"
            [loading]="loading"
          ></button>

          <div class="text-center">
            <span class="text-sm text-gray-600">¿Ya tienes cuenta?</span>
            <a
              routerLink="/auth/login"
              class="text-sm text-blue-600 hover:text-blue-800 ml-1"
            >
              Inicia sesión aquí
            </a>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: []
})
export class RegisterComponent {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null
      : { passwordMismatch: true };
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    const { name, email, password } = this.registerForm.value;

    this.authService.register({ name, email, password }).subscribe({
      next: () => {
        this.notificationService.success('Registro exitoso');
        this.router.navigate(['/auth/login']);
      },
      error: (error) => {
        this.notificationService.error(error.message || 'Error al registrarse');
        this.loading = false;
      }
    });
  }
}
