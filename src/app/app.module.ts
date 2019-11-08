import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridListModule } from './Components/grid-list/grid-list.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CreateTransportadoraModule } from './Components/create-transportadora/create-transportadora.module';
import { EditTransportadoraModule } from './Components/edit-transportadora/edit-transportadora.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GridListModule,
    HttpClientModule,
    AppRoutingModule,
    CreateTransportadoraModule,
    EditTransportadoraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
