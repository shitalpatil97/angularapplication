import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student1 } from '../models/stud';

@Component({
  selector: 'app-reactstudform',
  templateUrl: './reactstudform.component.html',
  styleUrls: ['./reactstudform.component.css']
})
export class ReactstudformComponent implements OnInit {
  myReactiveForm:FormGroup;
  submitted:boolean=false;
  studData:Student1;

  constructor() {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(){
    this.myReactiveForm=new FormGroup({
      'userDetails':new FormGroup({
        'name':new FormControl('', Validators.required),
      'email':new FormControl('', Validators.required),
      'password':new FormControl('',Validators.minLength(8)),
      'gender':new FormControl('',Validators.required)
      }),
      'address':new FormGroup({
        'add':new FormControl('',Validators.required),
        'landmark':new FormControl('',Validators.required),
        'city':new FormControl(''),
        'state':new FormControl(''),
        'pin': new FormControl('')


      }),
      'mobile':new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)])
      
    })

  }
  onSubmit(){
    console.log(this.myReactiveForm);
    this.submitted=true;
    this.studData=new Student1();

    
  }
  
  

}
