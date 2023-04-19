import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-services/user-api.service';

@Component({
  selector: 'app-citizen-viewbirthcertificate',
  templateUrl: './citizen-viewbirthcertificate.component.html',
  styleUrls: ['./citizen-viewbirthcertificate.component.scss']
})
export class CitizenViewbirthcertificateComponent implements OnInit{
  Birth:any
  constructor(private Api:UserApiService){}

  ngOnInit(): void {
    let name=JSON.parse(localStorage.getItem('user')!).UserName;
    this.Api.ViewBirth(name).subscribe((res:any)=>{
      this.Birth = res;
      console.log(this.Birth,"check");
      
    })
  }

}
