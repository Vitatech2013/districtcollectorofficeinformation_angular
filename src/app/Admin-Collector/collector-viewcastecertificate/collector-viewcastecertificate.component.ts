import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../collector-services/admin-api.service';

@Component({
  selector: 'app-collector-viewcastecertificate',
  templateUrl: './collector-viewcastecertificate.component.html',
  styleUrls: ['./collector-viewcastecertificate.component.scss']
})
export class CollectorViewcastecertificateComponent implements OnInit{
  Caste:any;
  constructor(private Api:AdminApiService){}

  ngOnInit(): void {
    this.Api.ViewBirth().subscribe((res:any)=>{
      this.Caste = res;
    })

}
  

}
