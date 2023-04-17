import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  constructor(private http:HttpClient) { }

AdminLogin(UserName:any,Password:any){
  return this.http.get<any>(`http://localhost:4000/admin/adminlogin?UserName=${UserName}&Password=${Password}`)
}
RegEmployee(data:any){
  return this.http.post<any>(`http://localhost:4000/admin/empreg` , data)
}
GetEmployee(){
  return this.http.get<any>(`http://localhost:4000/admin/empreg`)
}
DeleteEmployee(id:any){
  return this.http.delete<any>(`http://localhost:4000/admin//empdel/` +id)
}
}
