import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentsRoutingModule } from './equipments-routing.module';
import { ViewEquipmentsComponent } from './view-equipments/view-equipments.component';
import { AddequipmentComponent } from './addequipment/addequipment.component';
import { OrdersComponent } from './orders/orders.component';
import { EquipmentInfoComponent } from './equipment-info/equipment-info.component';

@NgModule({
  declarations: [
    ViewEquipmentsComponent,
    AddequipmentComponent,
    OrdersComponent,
    EquipmentInfoComponent
  ],
  imports: [
    CommonModule,
    EquipmentsRoutingModule,
  
   
  ]
})
export class EquipmentsModule { }
