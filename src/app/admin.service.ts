import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  user ='http://localhost:3000/customer/view';
  signIn = 'http://localhost:3000/admin/signIn';
  equips = 'http://localhost:3000/service/view-services';
  equipsDetail = 'http://localhost:3000/service/view-services/:sid';
  contractFarming = 'http://localhost:3000/contract/contract-farming';
  constructor(private http: HttpClient) { }

  sign_In(admin:Admin){
    return this.http.post<any>(this.signIn,admin);
  }

  viewEquipments():Observable<any>{
    return this.http.get(this.equips);
  }

  equip_info(id:any){
    return this.http.get<any>(this.equipsDetail+id);
  }

  user_details(id:any){
    return this.http.get<any>(this.user+id);
  }

  contract_Farming(formData:FormData){
    return this.http.post<any>(this.contractFarming,formData);
  }
  public checkToken():boolean{
    return !!sessionStorage.getItem('token');
  }


}
