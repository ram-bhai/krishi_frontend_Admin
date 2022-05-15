import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
// import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-view-equipments',
  templateUrl: './view-equipments.component.html',
  styleUrls: ['./view-equipments.component.scss']
})
export class ViewEquipmentsComponent implements OnInit {
  tools:any;
  constructor(private equipments:AdminService, private router:Router,private active:ActivatedRoute){}

  ngOnInit(): void {
    this.equipments.viewEquipments().subscribe(data=>{
      this.tools = data
      //this.tools.paginator = this.paginator;
  })
}
service_item(id:any){
  // console.log("call");
  // alert("data");
     this.router.navigate(['equipment-info',id],{relativeTo:this.active});
}

}
