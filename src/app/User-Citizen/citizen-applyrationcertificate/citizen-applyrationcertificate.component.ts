import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormControl , FormGroup , Validators } from '@angular/forms';
import { UserApiService } from '../user-services/user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citizen-applyrationcertificate',
  templateUrl: './citizen-applyrationcertificate.component.html',
  styleUrls: ['./citizen-applyrationcertificate.component.scss']
})
export class CitizenApplyrationcertificateComponent implements OnInit{

  rationform!:FormGroup;

constructor(private fb:FormBuilder , private service:UserApiService , private router:Router){}

  ngOnInit(): void {
   this.rationform = this.fb.group({
    UserName: new FormControl('',[Validators.required]),
    MobileNumber: new FormControl('',[Validators.required]),
    Sonofdaughter: new FormControl('',[Validators.required]),
    SonOfDaughterName: new FormControl('',[Validators.required]),
    NoOfChildrens: new FormControl('',[Validators.required]),
    NoofAdultsinYourfamily:  new FormControl('',[Validators.required]),
    Age:  new FormControl('',[Validators.required]),
    District: new FormControl('',[Validators.required]),
    Mandal  : new FormControl('',[Validators.required]),
    City: new FormControl('',[Validators.required]),
    HouseNo:  new FormControl('',[Validators.required]),
    Pincode: new FormControl('',[Validators.required]),
    Annualincome: new FormControl('',[Validators.required]),
    AadherNumber: new FormControl('',[Validators.required]),
    Photo: new FormControl('',[Validators.required]),
   })
   this.rationform.patchValue({
    UserName: JSON.parse(localStorage.getItem('user')!).UserName
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
  applyRation(){
    let data = {
      ...this.rationform.value,
      status : 'Pending'
    }
    if(this.rationform.valid){
      this.service.AddRation(data).subscribe((res)=>{
        alert("Certificate Applied");
        this.router.navigate(['/citizen-navbar/citizen-viewration'])
      })
    }else{
      alert("Something Went Wrong")
    }
  }
}
