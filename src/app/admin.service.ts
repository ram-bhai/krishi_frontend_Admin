import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from './model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  signIn = 'http://localhost:3000/admin/signIn';
  
  contractFarming = 'http://localhost:3000/contract/contract-farming';
  constructor(private http: HttpClient) { }

  sign_In(admin:Admin){
    return this.http.post<any>(this.signIn,admin);
  }
  contract_Farming(formData:FormData){
    return this.http.post<any>(this.contractFarming,formData);
  }
  public checkToken():boolean{
    return !!sessionStorage.getItem('token');
  }


}
