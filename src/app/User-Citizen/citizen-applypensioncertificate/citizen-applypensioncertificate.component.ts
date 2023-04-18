import { Component } from '@angular/core';

@Component({
  selector: 'app-citizen-applypensioncertificate',
  templateUrl: './citizen-applypensioncertificate.component.html',
  styleUrls: ['./citizen-applypensioncertificate.component.scss']
})
export class CitizenApplypensioncertificateComponent {

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
