import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-services/user-api.service';


@Component({
  selector: 'app-citizen-viewcastecertificate',
  templateUrl: './citizen-viewcastecertificate.component.html',
  styleUrls: ['./citizen-viewcastecertificate.component.scss']
})

export class CitizenViewcastecertificateComponent implements OnInit{

  Cast:any;
  constructor(private Api:UserApiService){}

  ngOnInit(): void {
    this.Api.ViewCast().subscribe((res:any)=>{
      this.Cast = res;
    })

}
}
