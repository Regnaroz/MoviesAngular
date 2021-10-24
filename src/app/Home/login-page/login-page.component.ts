import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginList:any=[]
  username:string=""
  password:string=""
 token:string=""

   login ={
    UserName:"",
    Password :""
   }

  constructor(private myService :SharedServiceService) { 
     
  }

  ngOnInit(): void {
  }
getLogin(){
  this.myService.getLoginList().subscribe(data=> {this.loginList=data})

}

checkLogin(){
this.login.UserName=this.username;
this.login.Password=this.password;
this.myService.checkLogin(this.login).subscribe(data=>{this.token=data})

  }
}
