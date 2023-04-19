import { Component, OnInit } from '@angular/core';
import { EmployeeApiService } from '../employee-services/employee-api.service';

@Component({
  selector: 'app-employee-viewrationcertificate',
  templateUrl: './employee-viewrationcertificate.component.html',
  styleUrls: ['./employee-viewrationcertificate.component.scss']
})
export class EmployeeViewrationcertificateComponent implements OnInit{
  Ration:any;
  constructor(private Api:EmployeeApiService){

  }
  ngOnInit(): void {
    this.Api.ViewRation().subscribe((res:any)=>{
      this.Ration = res;
    })
  }

}
