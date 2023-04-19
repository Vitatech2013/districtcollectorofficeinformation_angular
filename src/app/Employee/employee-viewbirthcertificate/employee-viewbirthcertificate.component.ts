import { Component, OnInit } from '@angular/core';
import { EmployeeApiService } from '../employee-services/employee-api.service';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeBirthstatusComponent } from '../employee-birthstatus/employee-birthstatus.component';


@Component({
  selector: 'app-employee-viewbirthcertificate',
  templateUrl: './employee-viewbirthcertificate.component.html',
  styleUrls: ['./employee-viewbirthcertificate.component.scss']
})
export class EmployeeViewbirthcertificateComponent implements OnInit{
  Birth:any
  constructor(private Api:EmployeeApiService,private dialog:MatDialog){}

  ngOnInit(): void {


    this.Api.ViewBirth().subscribe((res:any)=>{
      this.Birth = res;
      console.log(this.Birth,"check");
      
    })
  }
birthdialogue(e:any){
  this.dialog.open(EmployeeBirthstatusComponent,{
    width:'50%',
    height:'55%',
    data:e
  })
}
}
