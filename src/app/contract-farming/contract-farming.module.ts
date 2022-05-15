import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractFarmingRoutingModule } from './contract-farming-routing.module';
import { ContractsListComponent } from './contracts-list/contracts-list.component';
import { RequestsComponent } from './requests/requests.component';


@NgModule({
  declarations: [
    ContractsListComponent,
    RequestsComponent
  ],
  imports: [
    CommonModule,
    ContractFarmingRoutingModule
  ]
})
export class ContractFarmingModule { }
