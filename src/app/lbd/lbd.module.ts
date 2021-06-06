
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChartType, LbdChartComponent } from './lbd-chart/lbd-chart.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [

    LbdChartComponent

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    LbdChartComponent
  ],
  
})
export class LbdModule { }
