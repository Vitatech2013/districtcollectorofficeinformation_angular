import { Component, OnInit , Inject } from '@angular/core';
import { FormBuilder , FormControl, FormGroup ,Validators , } from '@angular/forms';
import { EmployeeApiService } from '../employee-services/employee-api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-employee-birthstatus',
  templateUrl: './employee-birthstatus.component.html',
  styleUrls: ['./employee-birthstatus.component.scss']
})
export class EmployeeBirthstatusComponent implements OnInit{
  
  birthstatusform!:FormGroup
  constructor(private fb:FormBuilder , private service:EmployeeApiService,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogueref : MatDialogRef<EmployeeBirthstatusComponent>
    ){}
  
  ngOnInit(): void {
    this.birthstatusform = this.fb.group({
      UserName : new FormControl ('',[Validators.required]),
      status : new FormControl ('',[Validators.required])
    });
    console.log(this.data);
    
    this.birthstatusform.patchValue({
      UserName : this.data.UserName,
      status : this.data.status
    })
  }
  editstatus(){
    const e={
      UserName : this.birthstatusform.get('UserName')?.value,
      status : this.birthstatusform.get('status')?.value
    }
    this.service.BirthStatusUpdate(this.data._id,e).subscribe((res)=>{
      alert("status Updated");
      window.location.reload();
    })
  }

}
