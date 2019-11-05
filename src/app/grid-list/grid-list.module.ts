import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule, MatToolbarModule, MatButtonModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { DrawerModule } from './drawer/drawer.module';
import { CardModule } from './card/card.module';

import { GridListComponent } from './grid-list.component';

@NgModule({
  declarations: [
    GridListComponent,
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    DrawerModule,
    CardModule
  ],

  exports: [
    GridListComponent
  ]
})
export class GridListModule { }
