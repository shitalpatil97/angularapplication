import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../models/student';

@Component({
  selector: 'app-formgroup',
  templateUrl: './formgroup.component.html',
  styleUrls: ['./formgroup.component.css']
})
export class FormgroupComponent implements OnInit {

  stud=new Student();
  studDetails:boolean=false;

  constructor() { }
  OnSubmit(form:NgForm){
    this.studDetails=true;
    console.log(form);
    this.stud.fname=form.value.userDetails.username;
    this.stud.mname=form.value.userDetails.midName;
    this.stud.lname=form.value.userDetails.lname;
    this.stud.pAdd=form.value.addressDetails.pAddress;
    this.stud.tempAdd=form.value.addressDetails.tAddress;
    this.stud.city=form.value.addressDetails.city;
    this.stud.state=form.value.addressDetails.state;
    this.stud.college=form.value.colDetails.education;
    this.stud.dept=form.value.colDetails.dept;
    this.stud.course=form.value.colDetails.dept;
    this.stud.mobile=form.value.mobile;
    this.stud.gender=form.value.male;

    

  }

  ngOnInit() {
  }

}
