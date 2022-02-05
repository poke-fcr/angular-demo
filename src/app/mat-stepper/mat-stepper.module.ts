import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatStepperRoutingModule } from './mat-stepper-routing.module';
import { FirstComponent } from './first/first.component';


@NgModule({
  declarations: [FirstComponent],
  imports: [
    CommonModule,
    MatStepperRoutingModule
  ]
})
export class MatStepperModule { }
