import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http:HttpClient) { }
  
UserLogin(UserName:any,Password:any){
  return this.http.get<any>(`http://localhost:4000/user/userlogin?UserName=${UserName}&Password=${Password}`)
}
UserReg(data:any){
  return this.http.post('http://localhost:4000/user/',data)
}
ViewBirth(){
  return this.http.get('http://localhost:4000/user/viewbirth')
}
ChangePwd(id:any,data:any){
  return this.http.put('http://localhost:4000/user/updateprofile/' + id,data)
}
ViewCast(){
  return this.http.get('http://localhost:4000/user/viewcast')
}
ViewDeathCerti(){
  return this.http.get('http://localhost:4000/user/viewdeath')
}
ViewPension(){
  return this.http.get('http://localhost:4000/user/viewpention')
}
ViewRation(){
  return this.http.get('http://localhost:4000/user/viewration')
}
}
