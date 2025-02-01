import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const PRIME_MODULES = [
  ButtonModule,
  InputTextModule,
  CheckboxModule,
  MessageModule,
  ToastModule,
  TableModule,
  DialogModule,
  ConfirmDialogModule,
  DropdownModule,
  CardModule,
  ProgressSpinnerModule,
  MenuModule,
  SidebarModule
];

@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ...PRIME_MODULES
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ...PRIME_MODULES,
    MainLayoutComponent
  ]
})
export class SharedModule { }
