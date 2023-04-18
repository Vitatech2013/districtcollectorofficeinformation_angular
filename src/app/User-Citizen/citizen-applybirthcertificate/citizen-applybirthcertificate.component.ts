import { Component } from '@angular/core';

@Component({
  selector: 'app-citizen-applybirthcertificate',
  templateUrl: './citizen-applybirthcertificate.component.html',
  styleUrls: ['./citizen-applybirthcertificate.component.scss']
})
export class CitizenApplybirthcertificateComponent {
  
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
