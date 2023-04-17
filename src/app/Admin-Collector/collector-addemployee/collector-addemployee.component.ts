import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators , FormBuilder} from '@angular/forms';
import { AdminApiService } from '../collector-services/admin-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-collector-addemployee',
  templateUrl: './collector-addemployee.component.html',
  styleUrls: ['./collector-addemployee.component.scss']
})
export class CollectorAddemployeeComponent implements OnInit {

  addemployeeform!:FormGroup

  constructor(private fb:FormBuilder , private service:AdminApiService , private router:Router){}

  ngOnInit(): void {
    this.addemployeeform = this.fb.group({
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
  }
  Employeereg(){
    if(this.addemployeeform.valid){
      this.service.RegEmployee(this.addemployeeform.value).subscribe((res)=>{
        alert("Employee Registered Successfully");
        console.log(res,"kjkkk");
        
        this.router.navigate(['collector-navbar/admin-viewemployee'])
      })
    }else{
      alert("Registration failed")
    }
  }
}