import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Stud } from '../models/form';

@Component({
  selector: 'app-tempform',
  templateUrl: './tempform.component.html',
  styleUrls: ['./tempform.component.css']
})
export class TempformComponent implements OnInit {
  default:string='Advanced';
  s=new Stud;
  submitted:boolean=false;
  msg:string="";
  arr:any[]=[];

  constructor() { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    

    this.s=new Stud();
    this.submitted=true;
    this.s.email=form.value.email;
    this.s.password=form.value.password;
    this.s.sub=form.value.sub;
    this.arr.push(this.s);

    if(form.valid){
      this.msg="All fields are filled successfully";


    }
    else{
      this.msg="please field all fields to submit form successfully";

    }

  }
  

}
