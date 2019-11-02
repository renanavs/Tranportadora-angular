import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material';
import { MenuModule } from './menu/menu.module';

import { GridListComponent } from './grid-list.component';

@NgModule({
  declarations: [
    GridListComponent,
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MenuModule
  ],

  exports: [
    GridListComponent
  ]
})
export class GridListModule { }
