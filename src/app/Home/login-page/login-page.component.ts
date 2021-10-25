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
<<<<<<< HEAD
  username:string=""
  password:string=""
 token:string=""
=======
  tokenList:any=[]
>>>>>>> 7afbcb46ba834eb837a54ac267087102815081b1


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
  let  user={  
        
    "userName":formData.value.UserName,
    "password": formData.value.Password}
 this.myService.getToken(user).pipe()

<<<<<<< HEAD
checkLogin(){
this.login.UserName=this.username;
this.login.Password=this.password;
this.myService.checkLogin(this.login).subscribe(data=>{this.token=data})
=======
}
insertLogin(){
  let user=
  {
   "userName": "newUser2",
    "password": "1234",
    "departmentId": 1,
    "accountantId": 1,
    "customerId": 2,
    "verification": 6873,
    "accountant": null,
    "customer": null,
    "department": null
}
>>>>>>> 7afbcb46ba834eb837a54ac267087102815081b1

this.myService.insertUser(user).subscribe(data=>{console.warn(data)})

}
}
