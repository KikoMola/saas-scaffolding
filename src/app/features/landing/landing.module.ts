import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// PrimeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';

const PRIME_MODULES = [
  ButtonModule,
  CardModule,
  DividerModule
];

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LandingRoutingModule,
    ...PRIME_MODULES
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule { } 