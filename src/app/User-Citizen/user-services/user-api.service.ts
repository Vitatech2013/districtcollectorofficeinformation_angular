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
ViewBirth(UserName:any){
  return this.http.get(`http://localhost:4000/user/viewbirth?UserName=${UserName}`)
}
ChangePwd(id:any,data:any){
  return this.http.put('http://localhost:4000/user/updateprofile/' + id,data)
}
ViewCast(userName:any){
  return this.http.get(`http://localhost:4000/user/viewcast?UserName=${userName}`)
}
ViewDeathCerti(UserName:any){
  return this.http.get(`http://localhost:4000/user/viewdeath?UserName=${UserName}`)
}
ViewPension(UserName:any){
  return this.http.get(`http://localhost:4000/user/viewpention?UserName=${UserName}`)
}
ViewRation(UserName:any){
  return this.http.get(`http://localhost:4000/user/viewration?UserName=${UserName}`)
}
UserAddComplaint(data:any){
   return this.http.post<any>(`http://localhost:4000/user/Addcomplaint`, data)
}
GetUserComplaint(UserName:any){
  return this.http.get<any>(`http://localhost:4000/user/viewcomple?UserName=${UserName}`)
}
PostapplyCaste(data:any){
  return this.http.post<any>(`http://localhost:4000/user/cast`, data)
}
GetCaste(UserName:any){
  return this.http.get<any>(`http://localhost:4000/user/viewcast?UserName=${UserName}`)
}
AddPension(data:any){
  return this.http.post<any>(`http://localhost:4000/user/pention`, data)
}
AddBirth(data:any){
  return this.http.post<any>(`http://localhost:4000/user/birth`,data)
}
AddDeath(data:any){
  return this.http.post<any>(`http://localhost:4000/user/death`,data)
}
AddRation(data:any){
  return this.http.post<any>(`http://localhost:4000/user/ration`,data)
}
UpdateProfile(id:any , data:any){
  return this.http.put<any>(`http://localhost:4000/user/updateprofile/` +id , data)
}
GetUserProfile(UserName:any){
  return this.http.get<any>(`http://localhost:4000/user/viewprofile?UserName=${UserName}`)
}
}
