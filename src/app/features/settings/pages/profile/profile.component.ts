import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
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