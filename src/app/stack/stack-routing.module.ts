import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StackListComponent } from './stack-list/stack-list.component';

const routes: Routes = [
  {
    path:'list',
    component:StackListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StackRoutingModule { }
