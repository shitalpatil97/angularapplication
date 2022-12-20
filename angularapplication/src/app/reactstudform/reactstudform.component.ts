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
  array:any=[];

  constructor() {
    this.createForm();
   }

  ngOnInit() {
    setTimeout(() => {
      this.myReactiveForm.patchValue({
        'userDetails' : {
          'name': 'Shital Patil',
          'email': 'patilshitalsuresh@gmail.com',
          'password':'shital@1234',
          'gender':'Female'
        },
        'address':{
          'add':'Jath',
          'landmark':'Shivaji Chouk',
          'city':'Jath',
          'state':'Maharashtra',
          
        }
      })
    }, 3500);
  }

  createForm(){
    this.myReactiveForm=new FormGroup({
      'userDetails':new FormGroup({
        'name':new FormControl('', Validators.required),
      'email':new FormControl('', [Validators.required,Validators.email]),
      'password':new FormControl('',[Validators.minLength(8),Validators.required]),
      'gender':new FormControl('',Validators.required)
      }),
      'address':new FormGroup({
        'add':new FormControl('',Validators.required),
        'landmark':new FormControl('',Validators.required),
        'city':new FormControl('', Validators.required),
        'state':new FormControl('',Validators.required),
        'pin': new FormControl('')


      }),
      'mobile':new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)])
      
    })

  }
  onSubmit(){
    console.log(this.myReactiveForm);
    this.submitted=true;
    this.studData=new Student1();
    this.studData.name=this.myReactiveForm['controls'].userDetails['controls'].name.value;
    this.studData.email=this.myReactiveForm['controls'].userDetails['controls'].email.value;
    this.studData.password=this.myReactiveForm['controls'].userDetails['controls'].password.value;
    this.studData.gender=this.myReactiveForm['controls'].userDetails['controls'].gender.value;
    this.studData.add=this.myReactiveForm['controls'].address['controls'].add.value;
    this.studData.landmark=this.myReactiveForm['controls'].address['controls'].landmark.value;
    this.studData.city=this.myReactiveForm['controls'].address['controls'].city.value;
    this.studData.state=this.myReactiveForm['controls'].address['controls'].state.value;
    this.studData.pin=this.myReactiveForm['controls'].address['controls'].pin.value;
    this.studData.mobile=this.myReactiveForm.controls.mobile.value;
    this.array.push(this.studData);





    

    




    
  }
  
  

}
