import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridListComponent } from './Components/grid-list/grid-list.component';
import { CreateTransportadoraComponent } from './Components/create-transportadora/create-transportadora.component';
import { EditTransportadoraComponent } from './Components/edit-transportadora/edit-transportadora.component';

const routes: Routes = [
  {path: '', component: GridListComponent},
  {path: 'create', component: CreateTransportadoraComponent},
  {path: 'edit/:id', component: EditTransportadoraComponent}
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
