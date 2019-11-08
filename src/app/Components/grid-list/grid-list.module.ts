import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule, MatButtonModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { DrawerModule } from './drawer/drawer.module';
import { CardModule } from './card/card.module';

import { GridListComponent } from './grid-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    GridListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatGridListModule,
    MatButtonModule,
    MatSidenavModule,
    DrawerModule,
    CardModule,
    DrawerModule
  ],
  exports: [
    GridListComponent
  ]
})
export class GridListModule { }
