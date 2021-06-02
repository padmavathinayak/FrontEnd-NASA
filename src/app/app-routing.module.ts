import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConsumeComponent} from '../app/consume/consume.component';
import {ConsumedetailsComponent} from '../app/consumedetails/consumedetails.component';
const routes: Routes = [
  {path:'data',component:ConsumeComponent},
  {path:'data/:id',component:ConsumedetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
