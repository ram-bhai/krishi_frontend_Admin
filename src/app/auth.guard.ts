import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private adminService:AdminService,private router:Router){}
  canActivate():boolean{
    if(this.adminService.checkToken()){
       return true;
     }
     else{
       this.router.navigate(['sign-in']);
       return false;
     }
  
    return true;
  }
  
}
