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
    this.Api.ViewRation().subscribe((res:any)=>{
      this.Ration = res;
    })
  }

}
