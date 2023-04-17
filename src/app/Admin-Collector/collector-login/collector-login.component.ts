import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormControl , Validators , FormGroup } from '@angular/forms';
import { AdminApiService } from '../collector-services/admin-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collector-login',
  templateUrl: './collector-login.component.html',
  styleUrls: ['./collector-login.component.scss']
})
export class CollectorLoginComponent implements OnInit{

  collectorloginform!:FormGroup;

  constructor(private fb:FormBuilder , private service:AdminApiService , private router:Router){}

  ngOnInit(): void {
    this.collectorloginform = this.fb.group({
      UserName : new FormControl('',[Validators.required]),
      Password : new FormControl('',[Validators.required])
    })
  }
login(){
 let UserName = this.collectorloginform.get('UserName')?.value;
 let Password = this.collectorloginform.get('Password')?.value;
  this.service.AdminLogin(UserName,Password).subscribe((res)=>{
    if(res){
      localStorage.setItem('admin',JSON.stringify(res.body));
      alert("Collector Login Success");
  this.router.navigate(['/collector-navbar'])
    }
    else{
      alert("Invalid Credentials")
    }
  })
}
}
