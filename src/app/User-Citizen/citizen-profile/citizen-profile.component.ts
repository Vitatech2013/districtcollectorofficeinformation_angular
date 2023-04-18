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
  ChangeDistrict(count: any) {
    this.mandals = this.District.find(con => con.name == count).mandals;
    console.log(this.mandals,"mandal");
    
  }
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
    })
  }
  Update(){
    
  }
}
