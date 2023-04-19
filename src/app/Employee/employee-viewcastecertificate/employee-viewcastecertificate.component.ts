import { Component, OnInit } from '@angular/core';
import { EmployeeApiService } from '../employee-services/employee-api.service';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeCastestatusComponent } from '../employee-castestatus/employee-castestatus.component';
import { FormBuilder , FormGroup ,Validators , FormControl } from '@angular/forms';
@Component({
  selector: 'app-employee-viewcastecertificate',
  templateUrl: './employee-viewcastecertificate.component.html',
  styleUrls: ['./employee-viewcastecertificate.component.scss']
})
export class EmployeeViewcastecertificateComponent implements OnInit{

  
  Cast:any;
  constructor(private Api:EmployeeApiService , private dialogue:MatDialog){}

  ngOnInit(): void {
    this.Api.ViewCast().subscribe((res:any)=>{
      this.Cast = res;
    })
  }
castedialogue(e:any){
  this.dialogue.open(EmployeeCastestatusComponent,{
    width: '50%',
    height: '55%',
    data:e
  })
}
}
