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
  checkBoxValue = false;

 @ViewChild("termsBox") myCheckbox:any;
  myform:any;
  password=null
  RegisterResult:any=[]
  ConfirmedPassword=null
  result = false;
  passwordValid=true;
  newData:any=[]
  customerID :any
  errorLogs =''
  emailIsValid=false
  usernameIsValid=false
  visaIsValid=false
  constructor(private myService :SharedServiceService) { }

  ngOnInit(): void {
    this.getAllCustomers()
   
  }
  getBorderColor() {
    
    if(this.password==this.ConfirmedPassword)
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
  
    console.warn(this.checkBoxValue)
   }
  
  getCustomer (email:string){
    this.myService.getSingleCustomerData(email).subscribe(data=>{console.warn(data)})
    
    
  }
checkEmail(){

  this.loginList.forEach(function (item:any) {  
    console.warn(item.email) 
});
}
  getAllCustomers(){
    this.myService.getAllCustomersData().subscribe(data=>{this.loginList=data},err=>{alert(err)})
    
   
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
     alert('Error  email, username or card are invaild')
      

      }, err =>{alert()})
  
 
        

}

    }
  }
