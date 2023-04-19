import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators , FormControl } from '@angular/forms';
import { UserApiService } from '../user-services/user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citizen-applydeathcertificate',
  templateUrl: './citizen-applydeathcertificate.component.html',
  styleUrls: ['./citizen-applydeathcertificate.component.scss']
})
export class CitizenApplydeathcertificateComponent implements OnInit {
  
  deathForm!:FormGroup;

  constructor(private fb:FormBuilder , private service:UserApiService , private router:Router){}

  ngOnInit(): void {
    this.deathForm = this.fb.group({
    UserName: new FormControl ('',[Validators.required]),
    MobileNumber:  new FormControl ('',[Validators.required]),
    Sonofdaughter:  new FormControl ('',[Validators.required]),
    SonOfDaughterName: new FormControl ('',[Validators.required]),
    Dob:  new FormControl ('',[Validators.required]),
    PlaceDob: new FormControl ('',[Validators.required]),
    District:  new FormControl ('',[Validators.required]),
     Mandal  :  new FormControl ('',[Validators.required]),
    City: new FormControl ('',[Validators.required]),
    HouseNo:  new FormControl ('',[Validators.required]),
    Pincode:  new FormControl ('',[Validators.required]),
    AadherNumber:  new FormControl ('',[Validators.required]),
    Jobcard: new FormControl ('',[Validators.required]),
    });
    this.deathForm.patchValue({
      UserName : JSON.parse(localStorage.getItem('user')!).UserName
    })
  }

  url:any;

  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.url = event.target?.result;
      }
    }
  }
  applyDeath(){
    let data = {
      ...this.deathForm.value,
      Jobcard:this.url,
      status : 'Pending'
    }
    if(this.deathForm.valid){
      this.service.AddDeath(data).subscribe((res)=>{
        alert("Certificate Applied");
        this.router.navigate(['/citizen-navbar/citizen-viewdeath'])
      })
    }else{
      alert("Something went wrong")
    }
  }
}
