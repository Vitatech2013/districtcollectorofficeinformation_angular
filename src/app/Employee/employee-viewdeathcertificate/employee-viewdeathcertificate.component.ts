import { Component, OnInit } from '@angular/core';
import { EmployeeApiService } from '../employee-services/employee-api.service';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeDeathstatusComponent } from '../employee-deathstatus/employee-deathstatus.component';

@Component({
  selector: 'app-employee-viewdeathcertificate',
  templateUrl: './employee-viewdeathcertificate.component.html',
  styleUrls: ['./employee-viewdeathcertificate.component.scss']
})
export class EmployeeViewdeathcertificateComponent implements OnInit{
  DeathCerti:any;

  constructor(private Api:EmployeeApiService , private dialog:MatDialog){}

  ngOnInit(): void {
    this.Api.ViewDeathCerti().subscribe((res:any)=>{
      this.DeathCerti = res;
    })
  }
  deathdialogue(e:any){
    this.dialog.open(EmployeeDeathstatusComponent,{
      width:'50%',
      height:'55%',
      data:e
    })
  }
}
