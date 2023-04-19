import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserApiService } from '../user-services/user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citizen-registration',
  templateUrl: './citizen-registration.component.html',
  styleUrls: ['./citizen-registration.component.scss']
})
export class CitizenRegistrationComponent {
  RegForm!:FormGroup;
  mandals:any;

  District:Array<any> = [
    {name:'Karimnagar',mandals:['Bejanki','Gangadhara','Manakondoor']},
    {name:'warangal',mandals:['Chennaraopet','Duggondi','Geesugonda']},
    {name:'Hanmakonda',mandals:['Shayampet','Damera','Thimmapur']},
  ];




  constructor(private fb:FormBuilder , private service:UserApiService , private router:Router){}

  ngOnInit(): void {
    this.RegForm = this.fb.group({
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
    })
  }
  Reg(){

  this.service.UserReg(this.RegForm.value).subscribe((res)=>{
    if(res){
      alert("User Registered Success");
      this.router.navigate(['/citizen-login'])
    }
    else{
      alert("Invalid Credentials")
    }
  })
}

}
