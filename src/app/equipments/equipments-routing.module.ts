import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AddequipmentComponent } from './addequipment/addequipment.component';
import { EquipmentInfoComponent } from './equipment-info/equipment-info.component';
import { ViewEquipmentsComponent } from './view-equipments/view-equipments.component';

const routes: Routes = [
  {path:'',component:ViewEquipmentsComponent,
  children:[
    {path:'add-new',component:AddequipmentComponent},
    {path:'equipment-info/:id',component:EquipmentInfoComponent}
  ],}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentsRoutingModule { }
