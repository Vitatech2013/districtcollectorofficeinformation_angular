import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators , FormControl } from '@angular/forms';
import { UserApiService } from '../user-services/user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citizen-addcomplaint',
  templateUrl: './citizen-addcomplaint.component.html',
  styleUrls: ['./citizen-addcomplaint.component.scss']
})
export class CitizenAddcomplaintComponent implements OnInit {
 
 citizencomplaintform!:FormGroup

constructor(private fb:FormBuilder , private service:UserApiService , private router:Router){} 
  
  ngOnInit(): void {

     this.citizencomplaintform = this.fb.group({
      UserName: new FormControl('',[Validators.required]),
      Subject: new FormControl('',[Validators.required]),
      Description: new FormControl('',[Validators.required]),
     })
     this.citizencomplaintform.patchValue({
      UserName : JSON.parse(localStorage.getItem('user')!).UserName,
     })
  }
addcompliant(){
  let p = this.citizencomplaintform.value;
  if(this.citizencomplaintform.valid){
    this.service.UserAddComplaint(p).subscribe((res)=>{
      alert("Complaint Added Successfully");
      this.router.navigate(['/citizen-navbar/citizen-viewcomplaint'])
    })
  }else{
    alert("Something Went Wrong")
  }
}
}
