import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesListComponent } from './courses-list/courses-list.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon'
@NgModule({
  declarations: [CoursesListComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatTabsModule,
    MatIconModule,
  ]
})
export class CoursesModule { }
