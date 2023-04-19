import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-services/user-api.service';

@Component({
  selector: 'app-citizen-viewdeathcertificate',
  templateUrl: './citizen-viewdeathcertificate.component.html',
  styleUrls: ['./citizen-viewdeathcertificate.component.scss']
})
export class CitizenViewdeathcertificateComponent implements OnInit{
  DeathCerti:any;

  constructor(private Api:UserApiService){}

  ngOnInit(): void {
    let name=JSON.parse(localStorage.getItem('user')!).UserName;
    this.Api.ViewDeathCerti(name).subscribe((res:any)=>{
      this.DeathCerti = res;
    })
  }

}
