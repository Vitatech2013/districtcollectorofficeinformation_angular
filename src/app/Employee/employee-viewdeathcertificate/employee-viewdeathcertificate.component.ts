import { Component, OnInit } from '@angular/core';
import { EmployeeApiService } from '../employee-services/employee-api.service';

@Component({
  selector: 'app-employee-viewdeathcertificate',
  templateUrl: './employee-viewdeathcertificate.component.html',
  styleUrls: ['./employee-viewdeathcertificate.component.scss']
})
export class EmployeeViewdeathcertificateComponent implements OnInit{
  DeathCerti:any;

  constructor(private Api:EmployeeApiService){}

  ngOnInit(): void {
    this.Api.ViewDeathCerti().subscribe((res:any)=>{
      this.DeathCerti = res;
    })
  }

}
