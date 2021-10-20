import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  CreateCustomer(customerData:NgForm){
    console.warn(customerData.value)

  }
}
