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
    return this.http.get<any>(this.ApiUrl+"Movie/GetMovie");
  }

getToken(formData:NgForm){

  let Form = JSON.stringify(formData.value);
  const headerOptions = new HttpHeaders();
   headerOptions.set('Content-Type', 'application/json');
   
 return this.http.post<any>(this.ApiUrl+"Login",Form,{headers:headerOptions})
}
}
