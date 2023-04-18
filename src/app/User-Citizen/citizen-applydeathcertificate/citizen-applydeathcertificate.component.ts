import { Component } from '@angular/core';

@Component({
  selector: 'app-citizen-applydeathcertificate',
  templateUrl: './citizen-applydeathcertificate.component.html',
  styleUrls: ['./citizen-applydeathcertificate.component.scss']
})
export class CitizenApplydeathcertificateComponent {
  url:any;

  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.url = event.target?.result;
      }
    }
  }

}
