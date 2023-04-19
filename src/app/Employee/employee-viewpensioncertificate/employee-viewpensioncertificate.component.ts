import { Component } from '@angular/core';
import { EmployeeApiService } from '../employee-services/employee-api.service';

@Component({
  selector: 'app-employee-viewpensioncertificate',
  templateUrl: './employee-viewpensioncertificate.component.html',
  styleUrls: ['./employee-viewpensioncertificate.component.scss']
})
export class EmployeeViewpensioncertificateComponent {
  Pension:any;

  constructor(private Api:EmployeeApiService){}

  ngOnInit(): void {
    this.Api.ViewPension().subscribe((res:any)=>{
      this.Pension = res;
    })
  }

}
