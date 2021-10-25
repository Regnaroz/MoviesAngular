import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
ApiUrl = "https://localhost:44391/api/"
  constructor(private http :HttpClient) { }

  getLoginList(){
    return this.http.get<any>(this.ApiUrl+"login/GetLogin");
  }

getToken(formData:any){
  const headerDict = {
       'Content-Type': 'application/json',
       'Accept': 'application/json'
     }
    const requestOptions = {                                                                                                                                                                                 
       headers: new HttpHeaders(headerDict), 
    };
   return this.http.post('https://localhost:44391/api/login/checkLogin',formData,
     requestOptions)      
 
}

getSingleCustomerData( Email:any)
{
  return this.http.get<any>(this.ApiUrl+"Customer/GetCustomerByEmail/"+Email)
}
getAllCustomersData (){
  return this.http.get<any>(this.ApiUrl+"Customer/GetCustomer")
}

insertUser(user:any){
  return this.http.post<any>(this.ApiUrl+"Login/InsertLogin",user)
}
insertCustomer(user:NgForm){
  return this.http.post<any>(this.ApiUrl+"Customer/InsertCustomer",user.value)
}
}
