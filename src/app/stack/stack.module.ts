import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StackRoutingModule } from './stack-routing.module';
import { StackListComponent } from './stack-list/stack-list.component';

@NgModule({
  declarations: [StackListComponent],
  imports: [
    CommonModule,
    StackRoutingModule
  ]
})
export class StackModule { }
