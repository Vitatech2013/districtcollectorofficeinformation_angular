import { Component } from '@angular/core';

@Component({
  selector: 'app-citizen-applycastecertificate',
  templateUrl: './citizen-applycastecertificate.component.html',
  styleUrls: ['./citizen-applycastecertificate.component.scss']
})
export class CitizenApplycastecertificateComponent {

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
