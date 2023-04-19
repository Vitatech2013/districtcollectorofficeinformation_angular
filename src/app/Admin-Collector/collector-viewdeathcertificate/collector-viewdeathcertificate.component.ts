import { Component } from '@angular/core';
import { AdminApiService } from '../collector-services/admin-api.service';

@Component({
  selector: 'app-collector-viewdeathcertificate',
  templateUrl: './collector-viewdeathcertificate.component.html',
  styleUrls: ['./collector-viewdeathcertificate.component.scss']
})
export class CollectorViewdeathcertificateComponent {
  Death:any;
  constructor(private Api:AdminApiService){}

  ngOnInit(): void {
    this.Api.ViewDeathCerti().subscribe((res:any)=>{
      this.Death = res;
    })

}

}
