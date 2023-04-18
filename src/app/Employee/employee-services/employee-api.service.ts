import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {

  constructor(private http:HttpClient) { }

EmployeeLogin(EmployeeName:any,Password:any){
  return this.http.get<any>(`http://localhost:4000/employee/emplogin?EmployeeName=${EmployeeName}&Password=${Password}`)
}  
GetEmployeeProfile(EmployeeName:any){
  return this.http.get<any>(`http://localhost:4000/employee/empviewprofile?EmployeeName=${EmployeeName}`)
}
EditEmployeeProfiie(id:any , data:any){

  return this.http.put<any>(`http://localhost:4000/employee/empupdateprofile/` +id , data)
}
}
