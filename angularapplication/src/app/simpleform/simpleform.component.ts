import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {

  defaultValue:string='Angular';
  defaultGender:string='Male';
  employee = new Employee();
  submitted: boolean = false;
  e:string;
  genders=[{id:1, value:'Male'}, {id:2, value:'Female'}];
  arr:any[]=[];

  constructor() {
    
   }

  ngOnInit() {
  }
  OnSubmit(form:NgForm)

  {  

    this.submitted=true;
   

    console.log(form);

    this.employee.username=form.value.userDetails.username;
    this.employee.email=form.value.userDetails.email;
    this.employee.course=form.value.course;
    this.employee.gender=form.value.gender;
    this.arr.push(this.employee);
    form.reset();
    // form.controls['course'].setValue('Angular');
    // form.controls['gender'].setValue('Female');


    
    console.log(form.value.userDetails.username);
    console.log(form.value.course);
    
  

  }

}
