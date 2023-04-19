import { UserApiService } from './../user-services/user-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citizen-viewpensioncertificate',
  templateUrl: './citizen-viewpensioncertificate.component.html',
  styleUrls: ['./citizen-viewpensioncertificate.component.scss']
})
export class CitizenViewpensioncertificateComponent implements OnInit{

  Pension:any;

  constructor(private Api:UserApiService){}

  ngOnInit(): void {
    let name=JSON.parse(localStorage.getItem('user')!).UserName;
    this.Api.ViewPension(name).subscribe((res:any)=>{
      this.Pension = res;
    })
  }

}
