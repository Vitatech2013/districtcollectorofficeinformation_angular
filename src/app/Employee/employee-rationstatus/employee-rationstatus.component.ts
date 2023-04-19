import { Component, OnInit ,Inject } from '@angular/core';
import { FormBuilder, FormGroup , FormControl , Validators } from '@angular/forms';
import { EmployeeApiService } from '../employee-services/employee-api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-rationstatus',
  templateUrl: './employee-rationstatus.component.html',
  styleUrls: ['./employee-rationstatus.component.scss']
})
export class EmployeeRationstatusComponent implements OnInit {
  rationtatusform!:FormGroup
  constructor(private fb:FormBuilder , private service:EmployeeApiService,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogueref : MatDialogRef<EmployeeRationstatusComponent>
    ){}
  
  ngOnInit(): void {
    this.rationtatusform = this.fb.group({
      UserName : new FormControl ('',[Validators.required]),
      status : new FormControl ('',[Validators.required])
    });
    console.log(this.data);
    
    this.rationtatusform.patchValue({
      UserName : this.data.UserName,
      status : this.data.status
    })
  }
  editstatus(){
    const e={
      UserName : this.rationtatusform.get('UserName')?.value,
      status : this.rationtatusform.get('status')?.value
    }
    this.service.RationStatusUpdate(this.data._id,e).subscribe((res)=>{
      alert("status Updated");
      window.location.reload();
    })
  }

}
