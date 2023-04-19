import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-services/user-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-citizen-chng-pwd',
  templateUrl: './citizen-chng-pwd.component.html',
  styleUrls: ['./citizen-chng-pwd.component.scss']
})
export class CitizenChngPwdComponent implements OnInit{
  ChangePwd!:FormGroup
  User:any

  constructor(private Api:UserApiService,private fb:FormBuilder){}
  ngOnInit(): void {
    this.ChangePwd = this.fb.group({
      UserName:[''],
      Password:['',[Validators.required]],
      newPassword:['',[Validators.required]]
    });
    this.User = JSON.parse(localStorage.getItem('user')!)

     this.ChangePwd.patchValue({
      UserName:this.User.UserName
    })


  }
  Change(){
    let Pwd = this.ChangePwd.get('Password')?.value
    let nPwd = this.ChangePwd.get('newPassword')?.value

    if(this.User.Password == Pwd){
      let newData = {
        UserName : this.User.UserName,
        Password : nPwd
      }
      this.Api.ChangePwd(this.User._id,newData).subscribe((res:any)=>{
        alert("Password Updateted")
      })
    }else{
      alert("Password & new Password not matched")
    }
  }

}
