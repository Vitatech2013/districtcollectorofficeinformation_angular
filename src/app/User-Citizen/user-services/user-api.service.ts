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
}
