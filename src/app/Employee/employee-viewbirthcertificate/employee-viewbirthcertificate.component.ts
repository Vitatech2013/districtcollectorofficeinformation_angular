import { Component, OnInit } from '@angular/core';
import { EmployeeApiService } from '../employee-services/employee-api.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateStatusComponent } from '../update-status/update-status.component';

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
  status(){
    this.dialog.open(UpdateStatusComponent,{
      width:'70%',
      height:'50%'
    })
  }
}
