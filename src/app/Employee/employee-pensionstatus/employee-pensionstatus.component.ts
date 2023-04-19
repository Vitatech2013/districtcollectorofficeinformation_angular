import { Component , Inject ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup , FormControl , Validators } from '@angular/forms';
import { EmployeeApiService } from '../employee-services/employee-api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-pensionstatus',
  templateUrl: './employee-pensionstatus.component.html',
  styleUrls: ['./employee-pensionstatus.component.scss']
})
export class EmployeePensionstatusComponent implements OnInit {

  penssiontatusform!:FormGroup
  constructor(private fb:FormBuilder , private service:EmployeeApiService,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogueref : MatDialogRef<EmployeePensionstatusComponent>
    ){}
  
  ngOnInit(): void {
    this.penssiontatusform = this.fb.group({
      UserName : new FormControl ('',[Validators.required]),
      status : new FormControl ('',[Validators.required])
    });
    console.log(this.data);
    
    this.penssiontatusform.patchValue({
      UserName : this.data.UserName,
      status : this.data.status
    })
  }
  editstatus(){
    const e={
      UserName : this.penssiontatusform.get('UserName')?.value,
      status : this.penssiontatusform.get('status')?.value
    }
    this.service.PensionStatusUpdate(this.data._id,e).subscribe((res)=>{
      alert("status Updated");
      window.location.reload();
    })
  }

}
