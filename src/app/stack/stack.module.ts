import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StackRoutingModule } from './stack-routing.module';
import { StackListComponent } from './stack-list/stack-list.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon'
@NgModule({
  declarations: [StackListComponent],
  imports: [
    CommonModule,
    StackRoutingModule,
    MatTabsModule,
    MatIconModule
  ]
})
export class StackModule { }
