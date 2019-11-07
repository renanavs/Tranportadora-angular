import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTransportadoraComponent } from './create-transportadora.component';
import { MatInputModule, MatFormFieldModule, MatOptionModule } from '@angular/material';
import { MatSelectModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CreateTransportadoraComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  exports: [
    CreateTransportadoraComponent
  ]
})
export class CreateTransportadoraModule { }
