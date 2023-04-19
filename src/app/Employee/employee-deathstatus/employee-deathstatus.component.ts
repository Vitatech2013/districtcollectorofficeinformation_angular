import { Component, OnInit, Inject } from '@angular/core';
import { EmployeeApiService } from '../employee-services/employee-api.service';
import { FormBuilder, FormGroup ,FormControl , Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-deathstatus',
  templateUrl: './employee-deathstatus.component.html',
  styleUrls: ['./employee-deathstatus.component.scss']
})
export class EmployeeDeathstatusComponent implements OnInit {

  deathstatusform!:FormGroup
  constructor(private fb:FormBuilder , private service:EmployeeApiService,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogueref : MatDialogRef<EmployeeDeathstatusComponent>
    ){}
  
  ngOnInit(): void {
    this.deathstatusform = this.fb.group({
      UserName : new FormControl ('',[Validators.required]),
      status : new FormControl ('',[Validators.required])
    });
    console.log(this.data);
    
    this.deathstatusform.patchValue({
      UserName : this.data.UserName,
      status : this.data.status
    })
  }
  editstatus(){
    const e={
      UserName : this.deathstatusform.get('UserName')?.value,
      status : this.deathstatusform.get('status')?.value
    }
    this.service.DeathStatusUpdate(this.data._id,e).subscribe((res)=>{
      alert("status Updated");
      window.location.reload();
    })
  }

}
