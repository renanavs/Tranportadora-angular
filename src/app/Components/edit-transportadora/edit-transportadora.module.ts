import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule, MatFormFieldModule, MatOptionModule } from '@angular/material';
import { MatSelectModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EditTransportadoraComponent } from './edit-transportadora.component';

@NgModule({
  declarations: [
    EditTransportadoraComponent,
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
  ],
  exports: [
    EditTransportadoraComponent
  ]
})
export class EditTransportadoraModule { }
