import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , FormControl , Validators } from '@angular/forms';
import { UserApiService } from '../user-services/user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citizen-applypensioncertificate',
  templateUrl: './citizen-applypensioncertificate.component.html',
  styleUrls: ['./citizen-applypensioncertificate.component.scss']
})
export class CitizenApplypensioncertificateComponent implements OnInit {
  pensionform!: FormGroup;
 
 
 constructor(private fb:FormBuilder , private service:UserApiService , private router:Router){}
 
 
  ngOnInit(): void {
    this.pensionform = this.fb.group({
      UserName: new FormControl ('',[Validators.required]),
      MobileNumber:  new FormControl ('',[Validators.required]),
      Sonofdaughter:  new FormControl ('',[Validators.required]),
      SonOfDaughterName:  new FormControl ('',[Validators.required]),
      Age:  new FormControl ('',[Validators.required]),
      Children:  new FormControl ('',[Validators.required]),
      District:  new FormControl ('',[Validators.required]),
      Mandal:  new FormControl ('',[Validators.required]),
      City:  new FormControl ('',[Validators.required]),
      HouseNo:  new FormControl ('',[Validators.required]),
      Pincode: new FormControl ('',[Validators.required]),
      AadherNumber: new FormControl ('',[Validators.required]),
      Aadharcard:  new FormControl (this.url,[Validators.required]),
    })
    this.pensionform.patchValue({
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
applypension(){
  let data = {
    ...this.pensionform.value,
    Aadharcard:this.url,
    status : 'Pending'
  }
  console.log(data);
  
  if(this.pensionform.valid){
    this.service.AddPension(data).subscribe((res)=>{
      alert("Certificate Applied");
      this.router.navigate(['/citizen-navbar/citizen-viewpension'])
    })
  }else{
    alert("Something went wrong")
  }
}
}