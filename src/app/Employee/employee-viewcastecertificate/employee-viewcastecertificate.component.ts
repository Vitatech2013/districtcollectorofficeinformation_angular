import { Component, OnInit } from '@angular/core';
import { EmployeeApiService } from '../employee-services/employee-api.service';

@Component({
  selector: 'app-employee-viewcastecertificate',
  templateUrl: './employee-viewcastecertificate.component.html',
  styleUrls: ['./employee-viewcastecertificate.component.scss']
})
export class EmployeeViewcastecertificateComponent implements OnInit{

  
  Cast:any;
  constructor(private Api:EmployeeApiService){}

  ngOnInit(): void {
    this.Api.ViewCast().subscribe((res:any)=>{
      this.Cast = res;
    })
  }

}
