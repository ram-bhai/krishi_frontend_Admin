import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentsRoutingModule } from './equipments-routing.module';
import { ViewEquipmentsComponent } from './view-equipments/view-equipments.component';
import { AddequipmentComponent } from './addequipment/addequipment.component';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    ViewEquipmentsComponent,
    AddequipmentComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    EquipmentsRoutingModule
  ]
})
export class EquipmentsModule { }
