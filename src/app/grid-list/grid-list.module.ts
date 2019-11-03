import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule, MatToolbarModule, MatButtonModule } from '@angular/material';

import { GridListComponent } from './grid-list.component';

@NgModule({
  declarations: [
    GridListComponent,
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule
  ],

  exports: [
    GridListComponent
  ]
})
export class GridListModule { }
