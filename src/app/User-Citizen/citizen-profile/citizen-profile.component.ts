import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserApiService } from '../user-services/user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citizen-profile',
  templateUrl: './citizen-profile.component.html',
  styleUrls: ['./citizen-profile.component.scss']
})
export class CitizenProfileComponent {
  UpdateForm!:FormGroup;
  mandals:any;

  District:Array<any> = [
    {name:'Karimnagar',mandals:['Bejanki','Gangadhara','Manakondoor']},
    {name:'warangal',mandals:['Chennaraopet','Duggondi','Geesugonda']},
    {name:'Hanmakonda',mandals:['Shayampet','Damera','Thimmapur']},
  ];
  profile: any;

  constructor(private fb:FormBuilder , private service:UserApiService , private router:Router){}

  ngOnInit(): void {
    this.UpdateForm = this.fb.group({
      UserName : new FormControl('',[Validators.required]),
      Password : new FormControl('',[Validators.required]),
      Qualification: new FormControl('',[Validators.required]),
      Gender: new FormControl('',[Validators.required]),
      Dob: new FormControl('',[Validators.required]),
      Phoneno: new FormControl('',[Validators.required]),
      Emailid: new FormControl('',[Validators.required]),
      District: new FormControl('',[Validators.required]),
      Mandal: new FormControl('',[Validators.required]),
      City: new FormControl('',[Validators.required]),
    });
    this.getprofile();
  }
  getprofile(){
    let name = JSON.parse(localStorage.getItem('user')!).UserName;
    this.service.GetUserProfile(name).subscribe((res)=>{
      res.filter((x:any)=>{
        this.profile = x;
        this.UpdateForm.patchValue({
          UserName : this.profile.UserName,
          Password : this.profile.Password,
          Qualification : this.profile.Qualification,
          Gender : this.profile.Gender,
          Dob : this.profile.Dob,
          Phoneno : this.profile.Phoneno,
          Emailid : this.profile.Emailid,
          District : this.profile.District,
          Mandal : this.profile.Mandal,
          City : this.profile.City,
        })
      })
    })
  }
  update(){
    let id = this.profile._id;
    let data = this.UpdateForm.value;
      if(this.UpdateForm.valid){
        this.service.UpdateProfile(id , data).subscribe((res)=>{
          alert("Profile Updated");
          window.location.reload();
        })
      }else{
        alert("Something Went wrong")
      }
  }
}
