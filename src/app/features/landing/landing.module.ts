import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

import { LandingComponent } from './landing.component';

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule { } 