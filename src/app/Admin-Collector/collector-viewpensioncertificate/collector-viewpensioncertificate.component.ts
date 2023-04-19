import { Component } from '@angular/core';
import { AdminApiService } from '../collector-services/admin-api.service';

@Component({
  selector: 'app-collector-viewpensioncertificate',
  templateUrl: './collector-viewpensioncertificate.component.html',
  styleUrls: ['./collector-viewpensioncertificate.component.scss']
})
export class CollectorViewpensioncertificateComponent {
  Pension:any;
  constructor(private Api:AdminApiService){}

  ngOnInit(): void {
    this.Api.ViewPension().subscribe((res:any)=>{
      this.Pension = res;
    })

}

}
