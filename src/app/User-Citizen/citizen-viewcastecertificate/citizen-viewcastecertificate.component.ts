import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-services/user-api.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-citizen-viewcastecertificate',
  templateUrl: './citizen-viewcastecertificate.component.html',
  styleUrls: ['./citizen-viewcastecertificate.component.scss']
})

export class CitizenViewcastecertificateComponent implements OnInit{

  Cast:any;
  constructor(private Api:UserApiService){}

  ngOnInit(): void {
    let name=JSON.parse(localStorage.getItem('user')!).UserName;
    this.Api.ViewCast(name).subscribe((res:any)=>{
      this.Cast = res;
    })
}

}
