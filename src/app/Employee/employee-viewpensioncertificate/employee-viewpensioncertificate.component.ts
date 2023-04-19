import { Component } from '@angular/core';
import { EmployeeApiService } from '../employee-services/employee-api.service';
import { MatDialog } from '@angular/material/dialog';
import { EmployeePensionstatusComponent } from '../employee-pensionstatus/employee-pensionstatus.component';

@Component({
  selector: 'app-employee-viewpensioncertificate',
  templateUrl: './employee-viewpensioncertificate.component.html',
  styleUrls: ['./employee-viewpensioncertificate.component.scss']
})
export class EmployeeViewpensioncertificateComponent {
  Pension:any;

  constructor(private Api:EmployeeApiService , private dialog:MatDialog){}

  ngOnInit(): void {
    this.Api.ViewPension().subscribe((res:any)=>{
      this.Pension = res;
    })
  }

  pensiondialogue(e:any){
    this.dialog.open(EmployeePensionstatusComponent,{
      width:'50%',
      height:'55%',
      data:e
    })
  }

}
