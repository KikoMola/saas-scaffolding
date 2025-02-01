import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="flex min-h-screen bg-gray-100">
      <div class="m-auto w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">Iniciar Sesión</h2>
        
        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="space-y-6">
          <div class="space-y-2">
            <label for="email" class="text-sm font-medium text-gray-700">Email</label>
            <input
              pInputText
              id="email"
              type="email"
              formControlName="email"
              class="w-full"
              [ngClass]="{'ng-invalid ng-dirty': submitted && loginForm.get('email')?.errors}"
            />
            <small class="text-red-500" *ngIf="submitted && loginForm.get('email')?.errors?.['required']">
              El email es requerido
            </small>
            <small class="text-red-500" *ngIf="submitted && loginForm.get('email')?.errors?.['email']">
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
              [ngClass]="{'ng-invalid ng-dirty': submitted && loginForm.get('password')?.errors}"
            />
            <small class="text-red-500" *ngIf="submitted && loginForm.get('password')?.errors?.['required']">
              La contraseña es requerida
            </small>
          </div>

          <div class="flex items-center justify-between">
            <p-checkbox
              [binary]="true"
              formControlName="rememberMe"
              label="Recordarme"
            ></p-checkbox>
            <a
              routerLink="/auth/forgot-password"
              class="text-sm text-blue-600 hover:text-blue-800"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button
            pButton
            type="submit"
            label="Iniciar Sesión"
            class="w-full"
            [loading]="loading"
          ></button>

          <div class="text-center">
            <span class="text-sm text-gray-600">¿No tienes cuenta?</span>
            <a
              routerLink="/auth/register"
              class="text-sm text-blue-600 hover:text-blue-800 ml-1"
            >
              Regístrate aquí
            </a>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    const { email, password } = this.loginForm.value;

    this.authService.login({ email, password }).subscribe({
      next: () => {
        this.notificationService.success('Inicio de sesión exitoso');
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.notificationService.error(error.message || 'Error al iniciar sesión');
        this.loading = false;
      }
    });
  }
}
