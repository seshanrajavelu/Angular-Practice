import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompComponent } from './comp/comp.component';
import { EmployeeFormComponent } from './employee/employee-form/employee-form.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { ReactiveComponent } from './form/reactive/reactive.component';
import { TemplateDrivenComponent } from './form/template-driven/template-driven.component';
import { ParentComponent } from './parent/parent.component';
import { QusestionAndAnswerComponent } from './qusestion-and-answer/qusestion-and-answer.component';

const routes: Routes = [
  {path:"",component:ParentComponent},
  {path:"bindings",component:CompComponent},
  {path:"tForm",component:TemplateDrivenComponent},
  {path:"rForm",component:ReactiveComponent},
  {path:"q&a",component:QusestionAndAnswerComponent},
  {path:"employee",
   component:EmployeeListComponent,
   loadChildren:() =>import("./employee/employee.module").then(m=>m.EmployeeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
