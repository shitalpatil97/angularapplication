import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {
  myForm:FormGroup;

  constructor() { 
    this. createForm();
  }
  onSubmit(){
    console.log(this.myForm);
    
  }
  createForm(){
    this.myForm=new FormGroup({
      'name':new FormControl('',[Validators.required,Validators.maxLength(5),Validators.minLength(5)],),
      'lname':new FormControl('',[Validators.required,Validators.maxLength(10)]),
      'age':new FormControl('',[Validators.required,Validators.min(18),Validators.max(20)]),
      'email':new FormControl('',[Validators.required,Validators.email]),
      'phone':new FormControl('',[Validators.minLength(10),Validators.maxLength(10)]),
      'city':new FormControl('Mumbai',Validators.required),
      'gender':new FormControl('',Validators.required),
      'password':new FormControl('',[Validators.required,Validators.minLength(8)]),
      'cPassword':new FormControl('',[Validators.required,Validators.minLength(8)])
    })
  }
  

  ngOnInit() {
  }

}
