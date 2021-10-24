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
    return this.http.get<any>(this.ApiUrl+"Login/GetLogin");
  }

getToken(formData:any){

  let Form = JSON.stringify(formData.value);
  console.warn(Form)
  const headerOptions = new HttpHeaders();
   headerOptions.set('Content-Type', 'application/json');
   
 return this.http.post<any>(this.ApiUrl+"Login/isUserExist",Form,{headers:headerOptions})
}
getCustomerData( Email:any)
{
  return this.http.get<any>(this.ApiUrl+"Customer/GetCustomerByEmail/"+Email)
}
insertUser(user:any){
  return this.http.post<any>(this.ApiUrl+"Login/InsertLogin",user)
}
insertCustomer(user:NgForm){
  return this.http.post<any>(this.ApiUrl+"Customer/InsertCustomer",user.value)
}
}
