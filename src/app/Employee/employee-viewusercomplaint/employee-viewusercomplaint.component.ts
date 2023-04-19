import { Component, OnInit } from '@angular/core';
import { EmployeeApiService } from '../employee-services/employee-api.service';

@Component({
  selector: 'app-employee-viewusercomplaint',
  templateUrl: './employee-viewusercomplaint.component.html',
  styleUrls: ['./employee-viewusercomplaint.component.scss']
})
export class EmployeeViewusercomplaintComponent implements OnInit{

  Complaints:any;

  constructor(private Api:EmployeeApiService){

  }
  ngOnInit(): void {
    this.Api.ViewComplaints().subscribe((res:any)=>{
      this.Complaints = res;
    })
  }

}
