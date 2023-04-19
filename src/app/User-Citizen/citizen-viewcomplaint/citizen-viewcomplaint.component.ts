import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-services/user-api.service';

@Component({
  selector: 'app-citizen-viewcomplaint',
  templateUrl: './citizen-viewcomplaint.component.html',
  styleUrls: ['./citizen-viewcomplaint.component.scss']
})
export class CitizenViewcomplaintComponent implements OnInit {
  Complaints: any;
  
constructor(private service:UserApiService){}
  
  ngOnInit(): void {
    this.getComplaints();
  }
getComplaints(){
  let name=JSON.parse(localStorage.getItem('user')!).UserName;
  this.service.GetUserComplaint(name).subscribe((res)=>{
    this.Complaints=res
  })
}

}
