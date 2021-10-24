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
  @ViewChild("mycheckbox") mycheckbox :any;
  myform:any;
  result = false;
  newData:any=[]
  customerID :any
  constructor(private myService :SharedServiceService) { }

  ngOnInit(): void {
  }
  getCustomer (email:string){
    this.myService.getCustomerData(email).subscribe(data=>{console.warn(data)})
    
    
  }
  CreateCustomer(customerData:NgForm){
    if(customerData.valid)
    {
       this.result=false
     
    
     
      this.myService.insertCustomer(customerData).subscribe(data=>{
     if(data)
     {
        
           this.myService.getCustomerData(customerData.value.email).subscribe(data=>{
             
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
       this.myService.insertUser(loginData).subscribe(data=>{console.warn("login API : Created Succefully "+data.result)})

       
          })
           
         
      
     
     }

      }, err =>{console.log(err)})
  
 
}
    }
  }
