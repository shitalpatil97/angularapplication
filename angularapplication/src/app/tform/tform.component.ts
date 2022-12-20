import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tform',
  templateUrl: './tform.component.html',
  styleUrls: ['./tform.component.css']
})
export class TformComponent implements OnInit {
  msg:string="";
  defaultVal:string="Mumbai";

  constructor() { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    
    console.log(form);
    
  }
    

  // 
}