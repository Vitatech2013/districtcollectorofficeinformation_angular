import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators , FormControl} from '@angular/forms';
import { UserApiService } from '../user-services/user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citizen-applybirthcertificate',
  templateUrl: './citizen-applybirthcertificate.component.html',
  styleUrls: ['./citizen-applybirthcertificate.component.scss']
})
export class CitizenApplybirthcertificateComponent implements OnInit {
 
  birthform!:FormGroup;

 constructor(private fb:FormBuilder , private service:UserApiService , private router:Router){}
 
  ngOnInit(): void {
    this.birthform = this.fb.group({
      UserName: new FormControl('',Validators.required),
      MobileNumber:new FormControl('',Validators.required),
      Sonofdaughter: new FormControl('',Validators.required),
      SonOfDaughterName: new FormControl('',Validators.required),
      Dob: new FormControl('',Validators.required),
      PlaceDob: new FormControl('',Validators.required),
      District:new FormControl('',Validators.required),
      Mandal  :new FormControl('',Validators.required),
      City: new FormControl('',Validators.required),
      HouseNo:new FormControl('',Validators.required),
      Pincode:new FormControl('',Validators.required),
      AadherNumber:new FormControl('',Validators.required),
      Rationcard: new FormControl('',Validators.required),
    })
    this.birthform.patchValue({
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
  ApplyBirth(){
    let data = {
      ...this.birthform.value,
      Rationcard:this.url,
      status : 'Pending'
    }
    if(this.birthform.valid){
      this.service.AddBirth(data).subscribe((res)=>{
        alert("Certificate Applied");
        this.router.navigate(['/citizen-navbar/citizen-viewbirth'])
      })
    }else{
      alert("Something went Wrong")
    }
  }
}
