import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';

// PrimeNG
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';

// Components
import { ProfileComponent } from './pages/profile/profile.component';
import { SecurityComponent } from './pages/security/security.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { BillingComponent } from './pages/billing/billing.component';

const PRIME_MODULES = [
  TableModule,
  CardModule,
  ButtonModule,
  InputTextModule,
  InputTextareaModule,
  DropdownModule,
  FileUploadModule,
  PasswordModule,
  DividerModule,
  InputSwitchModule,
  TagModule,
  TooltipModule
];

@NgModule({
  declarations: [
    ProfileComponent,
    SecurityComponent,
    NotificationsComponent,
    BillingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    SettingsRoutingModule,
    ...PRIME_MODULES
  ]
})
export class SettingsModule { }
