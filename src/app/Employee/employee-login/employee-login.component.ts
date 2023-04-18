import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormControl ,Validators ,FormGroup } from '@angular/forms';
import { EmployeeApiService } from '../employee-services/employee-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.scss']
})
export class EmployeeLoginComponent implements OnInit {
  Employeeloginform!: FormGroup;
 
 constructor(private fb:FormBuilder , private service:EmployeeApiService , private router:Router){}
 
  ngOnInit(): void {
    this.Employeeloginform = this.fb.group({
      EmployeeName : new FormControl ('',[Validators.required]),
      Password : new FormControl('',[Validators.required])
    })
  }
login(){
  let EmployeeName = this.Employeeloginform.get('EmployeeName')?.value;
  let Password = this.Employeeloginform.get('Password')?.value;
  this.service.EmployeeLogin(EmployeeName,Password).subscribe((res)=>{
    if(res){
    localStorage.setItem('Employee',JSON.stringify(res));
    alert("Employee Login Success");
    this.router.navigate(['/employee-navbar'])
    }
    else{
      alert("Invalid Credentials")
    }
  })
}
}
