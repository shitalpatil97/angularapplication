import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formcontrolexp',
  templateUrl: './formcontrolexp.component.html',
  styleUrls: ['./formcontrolexp.component.css']
})
export class FormcontrolexpComponent implements OnInit {

  constructor() { }
  OnSubmit(form:NgForm){
    console.log(form);
    form.reset();
    
  }

  ngOnInit() {
  }

}
