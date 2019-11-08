import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DrawerComponent } from './drawer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DrawerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DrawerComponent
  ]
})
export class DrawerModule { }
