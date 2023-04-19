import { Component, OnInit } from '@angular/core';
import { EmployeeApiService } from '../employee-services/employee-api.service';
import { EmployeeRationstatusComponent } from '../employee-rationstatus/employee-rationstatus.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-viewrationcertificate',
  templateUrl: './employee-viewrationcertificate.component.html',
  styleUrls: ['./employee-viewrationcertificate.component.scss']
})
export class EmployeeViewrationcertificateComponent implements OnInit{
  Ration:any;
  constructor(private Api:EmployeeApiService , private dialog:MatDialog){

  }
  ngOnInit(): void {
    this.Api.ViewRation().subscribe((res:any)=>{
      this.Ration = res;
    })
  }
  rationdialogue(e:any){
    this.dialog.open(EmployeeRationstatusComponent,{
      width:'50%',
      height:'55%',
      data:e
    })
  }
}
