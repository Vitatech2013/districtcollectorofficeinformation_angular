import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../collector-services/admin-api.service';

@Component({
  selector: 'app-collector-viewemployee',
  templateUrl: './collector-viewemployee.component.html',
  styleUrls: ['./collector-viewemployee.component.scss']
})
export class CollectorViewemployeeComponent implements OnInit{
  
empdata: any;

constructor(private service:AdminApiService){}

  ngOnInit(): void {
      this.getEmployees();
  }
getEmployees(){
  this.service.GetEmployee().subscribe((res)=>{
    this.empdata = res
  })
}
deleteemp(emp:any){
  this.service.DeleteEmployee(emp._id).subscribe((res)=>{
    alert("Deleted Employee");
    window.location.reload();
  })
}
}
