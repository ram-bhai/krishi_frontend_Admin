import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { SigninComponent } from './signin/signin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ToastrModule } from 'ngx-toastr';
import { AdminService } from './admin.service';
import { TokenService } from './token.service';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EquipmentsModule } from './equipments/equipments.module';
import { StorageModule } from './storage/storage.module';
import { ContractFarmingModule } from './contract-farming/contract-farming.module';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    NavbarComponent,
    ErrorpageComponent,
    FooterComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    EquipmentsModule,
    StorageModule,
    ContractFarmingModule,
    ToastrModule.forRoot()
  ],
  
  providers: [
    ApiService,
  AdminService,{
    provide:HTTP_INTERCEPTORS,
    useClass: TokenService,
    multi:true
   },],
  bootstrap: [AppComponent]
})
export class AppModule { }
