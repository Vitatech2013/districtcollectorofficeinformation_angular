import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators , FormControl } from '@angular/forms';
import { UserApiService } from '../user-services/user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citizen-applycastecertificate',
  templateUrl: './citizen-applycastecertificate.component.html',
  styleUrls: ['./citizen-applycastecertificate.component.scss']
})
export class CitizenApplycastecertificateComponent implements OnInit {
  url:any;
  casteform!:FormGroup;
  constructor(private fb:FormBuilder , private service:UserApiService , private router:Router){}

ngOnInit(): void {
    this.casteform = this.fb.group({
      UserName: new FormControl ('',[Validators.required]),
      MobileNumber:new FormControl ('',[Validators.required]),
      Sonofdaughter: new FormControl ('',[Validators.required]),
      SonOfDaughterName: new FormControl ('',[Validators.required]),
      CastType: new FormControl ('',[Validators.required]),
      Dob: new FormControl ('',[Validators.required]),
      District: new FormControl ('',[Validators.required]),
      Mandal  :new FormControl ('',[Validators.required]),
      City: new FormControl ('',[Validators.required]),
      HouseNo: new FormControl ('',[Validators.required]),
      Pincode:new FormControl ('',[Validators.required]),
      AadherNumber:new FormControl ('',[Validators.required]),
      Sscmemo:new FormControl ('',[Validators.required]),
    })
    this.casteform.patchValue({
      UserName: JSON.parse(localStorage.getItem('user')!).UserName
    })
}

  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.url = event.target?.result;
      }
    }
  }
  applyCaste(){
    let data ={
      ...this.casteform.value,
      Sscmemo:this.url,
      status:'Pending'
    } ;
    console.log(data);
    
    if(this.casteform.valid){
      this.service.PostapplyCaste(data).subscribe((res)=>{
        alert("Caste Certificate Applied");
        this.router.navigate(['/citizen-navbar/citizen-viewcaste'])
      })
    }else{
      alert("Something went wrong")
    }
}
}
