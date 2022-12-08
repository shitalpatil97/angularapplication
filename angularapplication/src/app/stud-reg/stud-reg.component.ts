import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-stud-reg',
  templateUrl: './stud-reg.component.html',
  styleUrls: ['./stud-reg.component.css']
})
export class StudRegComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm){
    alert('Form Submitted succesfully!!!\n Check the values in browser console.');
    console.log(form);
    

  }

}
