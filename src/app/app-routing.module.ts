import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  {path:'',component:SigninComponent},
  {path:'home',component:HomepageComponent},
  {path:'sign-in', component:SigninComponent},
  {path:'equipments',
  loadChildren:()=> import ('./equipments/equipments.module').then(module=>module.EquipmentsModule)},
  {path:'storage',
  loadChildren:()=> import('./storage/storage.module').then(module=>module.StorageModule)},
  {path:'contract-farming',
  loadChildren:()=> import('./contract-farming/contract-farming.module').then(module=>module.ContractFarmingModule)},
  {path:'**',component:ErrorpageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
