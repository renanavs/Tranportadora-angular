import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';

import { MenuComponent } from './menu.component';


@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    MenuComponent
  ],
})
export class MenuModule { }
