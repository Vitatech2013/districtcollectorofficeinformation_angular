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
ViewCast(){
  return this.http.get('http://localhost:4000/admin/castview')
}
ViewDeathCerti(){
  return this.http.get('http://localhost:4000/admin/deathview')
}
ViewPension(){
  return this.http.get('http://localhost:4000/admin/pentionview')
}
ViewRation(){
  return this.http.get('http://localhost:4000/admin/rationview')
}
ViewBirth(){
  return this.http.get('http://localhost:4000/admin/birthview')
}
}
