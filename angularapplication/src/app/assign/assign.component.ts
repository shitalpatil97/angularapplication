import { Component, OnInit } from '@angular/core';
import { Builder } from 'protractor';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {

  isShow = false;  
  arr:any=[];
  counter=0;
  color:string;
  
  toggleDisplayDiv(value) {  
    this.isShow = !this.isShow; 
    this.arr.push(this.counter++) ;
    // this.counter++;
    console.log(this.counter);
    if(this.counter==6){
      this.color='blue';
     


    }
    

  }  

  constructor() { }

  ngOnInit() {
  }

}
