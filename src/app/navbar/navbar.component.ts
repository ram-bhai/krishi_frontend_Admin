import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private admin:AdminService,private router: Router) { }

  ngOnInit(): void {
  }
  fixed:boolean = false;
  toggle:boolean=false;

  toggleFun(){
    this.toggle =! this.toggle;
  }
  isLoggedIn():boolean{
    return this.admin.checkToken();
  }
  signOut(){
    if(confirm("Are you Sure ?")){
      sessionStorage.removeItem('token');
      this.router.navigate(['sign-in']);
    }
  }
  @HostListener('window:scroll',['$event']) onScroll(){
    if(window.scrollY > 100){
      this.fixed = true;
    }else{
      this.fixed = false;
    }
  }

}
