import { Component, OnInit } from '@angular/core';
import { EmployeeApiService } from '../employee-services/employee-api.service';

@Component({
  selector: 'app-employee-viewbirthcertificate',
  templateUrl: './employee-viewbirthcertificate.component.html',
  styleUrls: ['./employee-viewbirthcertificate.component.scss']
})
export class EmployeeViewbirthcertificateComponent implements OnInit{
  Birth:any
  constructor(private Api:EmployeeApiService){}

  ngOnInit(): void {
    this.Api.ViewBirth().subscribe((res:any)=>{
      this.Birth = res;
      console.log(this.Birth,"check");
      
    })
  }
}
