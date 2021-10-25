import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.css']
})
export class HomeFooterComponent implements OnInit {
year:any;
  constructor() {
    this.year=new Date().getFullYear();
   }

  ngOnInit(): void {
  }

}
