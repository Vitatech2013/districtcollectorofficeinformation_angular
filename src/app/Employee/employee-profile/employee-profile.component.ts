import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators , FormControl , FormGroup } from '@angular/forms';
import { EmployeeApiService } from '../employee-services/employee-api.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent implements OnInit {
 
  employeeprofileform!:FormGroup; 
  employee:any
 constructor(private fb:FormBuilder ,private service:EmployeeApiService){}

  ngOnInit(): void {
    this.employeeprofileform = this.fb.group({
      EmployeeName : new FormControl('',[Validators.required]),
      Password : new FormControl('',[Validators.required]),
      Phoneno : new FormControl('',[Validators.required]),
      Emailid : new FormControl('',[Validators.required]),
      Gender : new FormControl('',[Validators.required]),
      Qualification : new FormControl('',[Validators.required]),
      Dob : new FormControl('',[Validators.required]),
      District : new FormControl('',[Validators.required]),
      Mandal : new FormControl('',[Validators.required]),
      City : new FormControl('',[Validators.required]),
    })
    this.getprofile();
  }
  getprofile(){
    let name=JSON.parse(localStorage.getItem('Employee')!).EmployeeName;
    this.service.GetEmployeeProfile(name).subscribe((res:any)=>{
      res.filter((x:any)=>{
        this.employee = x
        this.employeeprofileform.patchValue({
          EmployeeName:this.employee.EmployeeName,
          Password:this.employee.Password,
          Phoneno:this.employee.Phoneno,
          Emailid:this.employee.Emailid,
          Gender:this.employee.Gender,
          Qualification:this.employee.Qualification,
          Dob:this.employee.Dob,
          District:this.employee.District,
          Mandal:this.employee.Mandal,
          City:this.employee.City,
        })
      })    
     })
  }
  UpdateProfile(){
    let id = this.employee._id;
    let e = this.employeeprofileform.value;
    if(this.employeeprofileform.valid){
      this.service.EditEmployeeProfiie(id,e).subscribe((res)=>{
        alert("Profile updated Successfully");
        window.location.reload();
      })
    }
  }
}
