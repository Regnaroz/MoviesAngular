import { Component,ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { observable } from 'rxjs';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  loginList:any=[]
  DataList:any=[]
  checkBoxValue = false;

 @ViewChild("termsBox") myCheckbox:any;
  myform:any;
  password=null
  userEmail:any
  RegisterResult:any=[]
  ConfirmedPassword=null
  result = false;
  passwordValid=true;
  newData:any=[]
  customerID :any
  errorLogs =''
  emailValidation='initlize';
  EmailIsValid=true
  usernameIsValid=false
  visaIsValid=false
  userName=''
  constructor(private myService :SharedServiceService) { }

  ngOnInit(): void {
 
    this.getAllLogin()
    this.getAllCustomers()
    
   
  }

    
     
  getAllLogin(){
    this.myService.getLoginList().subscribe(data=>{this.DataList=data},err=>{alert(err)})
     this.DataList.forEach(function(item:any) {
       console.warn(item.userName);
       
     });
   
  }
  
  getEmailBorderColor(){
    if(this.emailValidation=='initlize'){
      return '';
    }
    
    else
    return '1px red solid';
  }
  getBorderColor() {
    if(this.password==null)
    {
      return '';
    }
   else if(this.password==this.ConfirmedPassword)
      return '1px green solid';
    else
      return '1px red solid';
  }
  checkPassword(){
    if(this.password==this.ConfirmedPassword){
    this.passwordValid=true
    return true
    }
    else{
    this.passwordValid=false
    return false
    }
  }
  setBoxValue(){
    if(this.myCheckbox.nativeElement.checked){
      this.checkBoxValue = true
     
    }
    else 
    this.checkBoxValue = false
  
   
   }
  
  getCustomer (email:string){
    this.myService.getSingleCustomerData(email).subscribe(data=>{console.warn(data)})
    
    
  }
  
  checkUserName(){
    this.usernameIsValid=true
    this.emailValidation='initlize'
     this.loginList.forEach((record:any) =>  {
         if(record.email.toString() == this.userName)
         {
          setTimeout(() => {
             this.EmailIsValid=false, this.emailValidation='Error';
          }, 1000)
          
         
         }
     });
      
    
    }
checkEmail(){
this.EmailIsValid=true
this.emailValidation='initlize'
 this.loginList.forEach((record:any) =>  {
     if(record.email.toString() == this.userEmail)
     {
      setTimeout(() => {
         this.EmailIsValid=false, this.emailValidation='Error';
      }, 1000)
      
     
     }
 });
  

}
getAllCustomers(){
    this.myService.getAllCustomersData().subscribe(data=>{this.loginList=data},err=>{alert(err)})
     this.loginList.forEach(function(item:any) {
       console.warn(item.email);
       
     });
   
  }
  CreateCustomer(customerData:NgForm){
    this.RegisterResult=false
    if(customerData.valid)
    {
       this.result=false
     
    
     
      this.myService.insertCustomer(customerData).subscribe( data=>{
     if(data)
     {
        
           this.myService.getSingleCustomerData(customerData.value.email).subscribe(  data=>{
             
            this.loginList=data
           const id = this.loginList.id
          const loginData ={
         username : customerData.value.UserName,
         password : customerData.value.Password,
         CustomerId :id,
         departmentId:null,
         accountantId:null,
         verification:null,
         accountant:null,
         customer:null,
         department:null
       }
        this.myService.insertUser(loginData).subscribe(data=>{ 
         alert("Created Email Succefully!")
        
        
        
        
        } ) 
      
      
      }
       
       ,err=>{alert(err +", "+ data.result)})
           
         
      
     
     }
     else
     {
     alert('Error  email, username or card are invaild');
     this.emailValidation='Error'
     }

      }, err =>{alert()})
  
 
        

}

    }
  }
