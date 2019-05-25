import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ToolBarWithSideBarComponent } from './tool-bar-with-side-bar/tool-bar-with-side-bar.component';
const routes: Routes = [
{
  path:'stack',
  loadChildren:'./stack/stack.module#StackModule'
},
{
  path:'courses',
  loadChildren:'./courses/courses.module#CoursesModule'
},
{
  path:'toolbar',
  component:ToolBarComponent
},
{
path:'side-toolbar',
component:ToolBarWithSideBarComponent
},

{
  path:'',
  redirectTo:'',
  pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
