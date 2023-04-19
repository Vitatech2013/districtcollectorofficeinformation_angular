import { Component } from '@angular/core';
import { AdminApiService } from '../collector-services/admin-api.service';

@Component({
  selector: 'app-collector-viewrationcertificate',
  templateUrl: './collector-viewrationcertificate.component.html',
  styleUrls: ['./collector-viewrationcertificate.component.scss']
})
export class CollectorViewrationcertificateComponent {
  Ration:any;
  constructor(private Api:AdminApiService){}

  ngOnInit(): void {
    this.Api.ViewRation().subscribe((res:any)=>{
      this.Ration = res;
    })

}

}
