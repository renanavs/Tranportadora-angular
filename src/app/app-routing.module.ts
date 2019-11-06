import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridListComponent } from './grid-list/grid-list.component';

const routes: Routes = [
  {path: '', component: GridListComponent},
  // {path: 'create'},
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
