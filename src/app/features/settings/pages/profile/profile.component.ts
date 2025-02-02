import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-profile',
  template: `
    <div class="space-y-6">
      <div class="flex justify-between items-center">
        <h2 class="text-2xl font-bold text-gray-800">Perfil</h2>
        <button pButton label="Guardar Cambios" icon="pi pi-save" 
                (click)="saveChanges()" [loading]="loading"></button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Foto de Perfil -->
        <div class="lg:col-span-1">
          <p-card>
            <div class="text-center space-y-4">
              <div class="w-32 h-32 mx-auto rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <img *ngIf="profileForm.get('photoUrl')?.value" 
                     [src]="profileForm.get('photoUrl')?.value" 
                     alt="Profile photo"
                     class="w-full h-full object-cover">
                <i *ngIf="!profileForm.get('photoUrl')?.value" 
                   class="pi pi-user text-4xl text-gray-400"></i>
              </div>
              <p-fileUpload mode="basic" chooseLabel="Cambiar Foto" 
                           [auto]="true" accept="image/*"
                           (uploadHandler)="onUpload($event)"
                           [customUpload]="true"
                           styleClass="p-button-outlined"></p-fileUpload>
            </div>
          </p-card>
        </div>

        <!-- Información Personal -->
        <div class="lg:col-span-2">
          <p-card>
            <form [formGroup]="profileForm" class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <label class="text-sm font-medium text-gray-700">Nombre</label>
                  <input pInputText formControlName="firstName" class="w-full"/>
                  <small class="text-red-500" 
                         *ngIf="profileForm.get('firstName')?.errors?.['required'] && profileForm.get('firstName')?.touched">
                    El nombre es requerido
                  </small>
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-medium text-gray-700">Apellido</label>
                  <input pInputText formControlName="lastName" class="w-full"/>
                  <small class="text-red-500" 
                         *ngIf="profileForm.get('lastName')?.errors?.['required'] && profileForm.get('lastName')?.touched">
                    El apellido es requerido
                  </small>
                </div>
              </div>

              <div class="space-y-2">
                <label class="text-sm font-medium text-gray-700">Email</label>
                <input pInputText formControlName="email" type="email" class="w-full"/>
                <small class="text-red-500" 
                       *ngIf="profileForm.get('email')?.errors?.['required'] && profileForm.get('email')?.touched">
                  El email es requerido
                </small>
                <small class="text-red-500" 
                       *ngIf="profileForm.get('email')?.errors?.['email'] && profileForm.get('email')?.touched">
                  El email no es válido
                </small>
              </div>

              <div class="space-y-2">
                <label class="text-sm font-medium text-gray-700">Teléfono</label>
                <input pInputText formControlName="phone" class="w-full"/>
              </div>

              <div class="space-y-2">
                <label class="text-sm font-medium text-gray-700">Biografía</label>
                <textarea pInputTextarea formControlName="bio" 
                          rows="4" class="w-full resize-none"></textarea>
              </div>

              <p-divider></p-divider>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <label class="text-sm font-medium text-gray-700">País</label>
                  <p-dropdown [options]="countries" formControlName="country" 
                            optionLabel="name" optionValue="code"
                            placeholder="Seleccionar país" 
                            [style]="{'width':'100%'}"></p-dropdown>
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-medium text-gray-700">Idioma</label>
                  <p-dropdown [options]="languages" formControlName="language" 
                            optionLabel="name" optionValue="code"
                            placeholder="Seleccionar idioma" 
                            [style]="{'width':'100%'}"></p-dropdown>
                </div>
              </div>
            </form>
          </p-card>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  loading = false;

  countries = [
    { name: 'España', code: 'ES' },
    { name: 'México', code: 'MX' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Chile', code: 'CL' }
  ];

  languages = [
    { name: 'Español', code: 'es' },
    { name: 'Inglés', code: 'en' },
    { name: 'Portugués', code: 'pt' },
    { name: 'Francés', code: 'fr' },
    { name: 'Alemán', code: 'de' }
  ];

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService
  ) {
    this.profileForm = this.fb.group({
      photoUrl: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      bio: [''],
      country: [''],
      language: ['']
    });
  }

  ngOnInit(): void {
    // Aquí cargaríamos los datos del usuario
    this.profileForm.patchValue({
      firstName: 'Juan',
      lastName: 'Pérez',
      email: 'juan.perez@example.com',
      phone: '+34 123 456 789',
      bio: 'Desarrollador Full Stack con experiencia en Angular y Node.js',
      country: 'ES',
      language: 'es'
    });
  }

  onUpload(event: any): void {
    // Aquí manejaríamos la subida de la foto
    // Por ahora solo simulamos
    this.loading = true;
    setTimeout(() => {
      this.profileForm.patchValue({
        photoUrl: 'https://via.placeholder.com/150'
      });
      this.loading = false;
      this.notificationService.success('Foto actualizada correctamente');
    }, 1500);
  }

  saveChanges(): void {
    if (this.profileForm.invalid) {
      Object.keys(this.profileForm.controls).forEach(key => {
        const control = this.profileForm.get(key);
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
      this.notificationService.success('Perfil actualizado correctamente');
    }, 1500);
  }
} 