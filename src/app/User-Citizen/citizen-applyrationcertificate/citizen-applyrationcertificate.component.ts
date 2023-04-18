import { Component } from '@angular/core';

@Component({
  selector: 'app-citizen-applyrationcertificate',
  templateUrl: './citizen-applyrationcertificate.component.html',
  styleUrls: ['./citizen-applyrationcertificate.component.scss']
})
export class CitizenApplyrationcertificateComponent {

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
