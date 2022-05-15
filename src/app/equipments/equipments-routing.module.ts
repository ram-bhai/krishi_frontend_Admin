import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddequipmentComponent } from './addequipment/addequipment.component';
import { ViewEquipmentsComponent } from './view-equipments/view-equipments.component';

const routes: Routes = [
  {path:'',component:ViewEquipmentsComponent,
  children:[
    {path:'add-new',component:AddequipmentComponent}
  ],}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentsRoutingModule { }
