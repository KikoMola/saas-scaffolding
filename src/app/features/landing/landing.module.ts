import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// PrimeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

// Components
import { LandingComponent } from './landing.component';
import { FeaturesComponent } from './components/features/features.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingRoutingModule } from './landing-routing.module';

const PRIME_MODULES = [
  ButtonModule,
  CardModule,
  DividerModule
];

@NgModule({
  declarations: [
    LandingComponent,
    FeaturesComponent,
    PricingComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LandingRoutingModule,
    ...PRIME_MODULES
  ]
})
export class LandingModule { } 