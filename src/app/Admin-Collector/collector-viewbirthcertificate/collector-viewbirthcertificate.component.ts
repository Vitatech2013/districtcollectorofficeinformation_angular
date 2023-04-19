import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../collector-services/admin-api.service';

@Component({
  selector: 'app-collector-viewbirthcertificate',
  templateUrl: './collector-viewbirthcertificate.component.html',
  styleUrls: ['./collector-viewbirthcertificate.component.scss']
})
export class CollectorViewbirthcertificateComponent implements OnInit{
  Birth:any;
  constructor(private Api:AdminApiService){}

  ngOnInit(): void {
    this.Api.ViewBirth().subscribe((res:any)=>{
      this.Birth = res;
    })

}

}
