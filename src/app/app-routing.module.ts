import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridListComponent } from './Components/grid-list/grid-list.component';
import { CreateTransportadoraComponent } from './Components/create-transportadora/create-transportadora.component';

const routes: Routes = [
  {path: '', component: GridListComponent},
  {path: 'create', component: CreateTransportadoraComponent},
  // {path: 'edit'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
