import { tokenName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { SharedServiceService } from 'src/app/shared-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginList:any=[]
  tokenList:any=[]
  roleName=''
 tokenHolder:any
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
   
    this.myService.getToken(user).subscribe((data:any)=>
    { if (data.tokenValue != null){
      console.warn(data)
      this.tokenHolder=data.tokenValue 
      const tokenValue:any=jwtDecode(this.tokenHolder);
      console.warn(tokenValue)
      switch(tokenValue.role)
      {
        case ('1'):{
         this.roleName='Admin' 
         break
        }
        case ('2'):{
         this.roleName='Customer' 
         
         break
        }
        case ('3'):{
         this.roleName='Accountant' 
         break
        }
         
      }
      console.log(
        'id : '+tokenValue.unique_name[1]+
        '\nName : '+tokenValue.unique_name[0]+
        '\nrole : '+this.roleName
        
        )
    }
    else{
      alert("Incorrect Login")
    }
    
   }
)


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

this.myService.insertUser(user).subscribe(data=>{console.warn(data)})

}
}
