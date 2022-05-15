import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-equipment-info',
  templateUrl: './equipment-info.component.html',
  styleUrls: ['./equipment-info.component.scss']
})
export class EquipmentInfoComponent implements OnInit {
id:any;
data:any;
user:any;
details:any;
userId:any;
  constructor(private active:ActivatedRoute,
    private admin:AdminService) { }

  ngOnInit(): void {
    this.id = this.active.snapshot.paramMap.get('id');
   this.admin.equip_info(this.id).subscribe(data=>{
     this.userId = sessionStorage.getItem('id')
     this.admin.user_details(this.userId).subscribe(result=>{
        alert("result"+result);
      this.user = result;
     })
     this.details = data;
     alert("details"+data);
   })
  }

}
