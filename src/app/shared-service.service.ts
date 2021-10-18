import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
ApiUrl = "https://localhost:44391/api/"
  constructor(private http :HttpClient) { }

  getLoginList (){
    return this.http.get<any>(this.ApiUrl+"Movie/GetMovie");
  }

  checkLogin(loginObject:any){
    return this.http.post<string>(this.ApiUrl+"Login",loginObject)
  }
}
