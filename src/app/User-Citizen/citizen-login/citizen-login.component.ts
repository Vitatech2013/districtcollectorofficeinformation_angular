import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApiService } from '../user-services/user-api.service';

@Component({
  selector: 'app-citizen-login',
  templateUrl: './citizen-login.component.html',
  styleUrls: ['./citizen-login.component.scss']
})
export class CitizenLoginComponent {

  loginform!:FormGroup;

  constructor(private fb:FormBuilder , private service:UserApiService , private router:Router){}

  ngOnInit(): void {
    this.loginform = this.fb.group({
      UserName : new FormControl('',[Validators.required]),
      Password : new FormControl('',[Validators.required])
    })
  }
login(){
 let UserName = this.loginform.get('UserName')?.value;
 let Password = this.loginform.get('Password')?.value;
  this.service.UserLogin(UserName,Password).subscribe((res)=>{
    if(res){
      localStorage.setItem('user',JSON.stringify(res));
      alert("User Login Success");
  this.router.navigate(['/citizen-navbar'])
    }
    else{
      alert("Invalid Credentials")
    }
  })
}

}
