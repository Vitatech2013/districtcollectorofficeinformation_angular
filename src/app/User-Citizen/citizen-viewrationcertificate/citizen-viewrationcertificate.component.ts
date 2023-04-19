import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-services/user-api.service';

@Component({
  selector: 'app-citizen-viewrationcertificate',
  templateUrl: './citizen-viewrationcertificate.component.html',
  styleUrls: ['./citizen-viewrationcertificate.component.scss']
})
export class CitizenViewrationcertificateComponent implements OnInit{

  Ration:any;
  constructor(private Api:UserApiService){

  }
  ngOnInit(): void {
    let name=JSON.parse(localStorage.getItem('user')!).UserName;
    this.Api.ViewRation(name).subscribe((res:any)=>{
      this.Ration = res;
    })
  }

}
