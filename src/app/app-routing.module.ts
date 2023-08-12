import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path:'', component:TemplateDrivenFormComponent,pathMatch:'full'
  },
  {
    path:'template-driven', component:TemplateDrivenFormComponent
  },
  {
    path:'reactive-form', component:ReactiveFormComponent
  },
  {
    path:'**', component:TemplateDrivenFormComponent,pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
