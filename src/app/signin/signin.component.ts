import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';
import { Admin } from '../model/admin';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  user: Admin = new Admin("", "");
  hide = true;
  isLoggedin?: boolean;
   loginForm!: FormGroup;
  constructor(private admin:AdminService,
    private router:Router,
    private notifyService:ToastrService,
    private active:ActivatedRoute) { }
  signIn(){
    this.admin.sign_In(this.user).subscribe(data=>{
      // alert("User signed in successfully");
      this.notifyService.success("Sing In Successfully..!!")
        sessionStorage.setItem("token",data.token);
      // alert(data);
        sessionStorage.setItem("id",data.user._id); 
        this.router.navigate(['home'],{relativeTo:this.active});
    },err=>{
    console.log(err);
    if(err instanceof HttpErrorResponse){
      if(err.status == 400){
        this.notifyService.error("Incorrect credentials")
      }
      else if(err.status == 500){
        this.notifyService.warning("Oops!Something went wrong..!")
      // alert(err);
    }
  }
});
}

  ngOnInit(): void {
  }

}
