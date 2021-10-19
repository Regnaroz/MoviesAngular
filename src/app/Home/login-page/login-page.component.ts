import { tokenName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { observable } from 'rxjs';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginList:any=[]
  tokenList:any=[]


  login ={
    UserName:"moas455sd4344",
    Password :"1234"
   }

  

   
  constructor(private myService :SharedServiceService) { 
  
  
    
  }

  ngOnInit(): void {
  }
getLogin(){
  this.myService.getLoginList().subscribe(data=> {this.loginList=data})

}
 getToken(formData:NgForm){
 this.myService.getToken(formData).subscribe(data=>{this.tokenList=data})
 }

}
