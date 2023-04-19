import { Component, OnInit ,Inject } from '@angular/core';
import { EmployeeApiService } from '../employee-services/employee-api.service';
import { FormBuilder, FormGroup ,Validators , FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-castestatus',
  templateUrl: './employee-castestatus.component.html',
  styleUrls: ['./employee-castestatus.component.scss']
})
export class EmployeeCastestatusComponent implements OnInit {
  castestatusform!:FormGroup
  constructor(private fb:FormBuilder , private service:EmployeeApiService,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogueref : MatDialogRef<EmployeeCastestatusComponent>
    ){}
  
  ngOnInit(): void {
    this.castestatusform = this.fb.group({
      UserName : new FormControl ('',[Validators.required]),
      status : new FormControl ('',[Validators.required])
    });
    console.log(this.data);
    
    this.castestatusform.patchValue({
      UserName : this.data.UserName,
      status : this.data.status
    })
  }
  editstatus(){
    const e={
      UserName : this.castestatusform.get('UserName')?.value,
      status : this.castestatusform.get('status')?.value
    }
    this.service.CasteStatusUpdate(this.data._id,e).subscribe((res)=>{
      alert("status Updated");
      window.location.reload();
    })
  }


}
