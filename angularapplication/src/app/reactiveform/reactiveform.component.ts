import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student1 } from '../models/stud';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  myReactiveForm:FormGroup;
  genders=[{id:1, value:'Male'}, {id:2, value:'Female'}];
  notAllowedNames=['codeMind','technology'];
  msg:string="";
  // submitted:boolean=false;
  // formData:Student1;

  constructor() {
    this.createForm();
   }

  createForm(){
    this.myReactiveForm=new FormGroup({
      'username':new FormControl('', [Validators.required,Validators.minLength(5),this.noNames.bind(this)]),
      'email':new FormControl('', [Validators.required,Validators.email,Validators.pattern(".+@codemind\.com")]),
      'course':new FormControl('Angular'),
      'gender':new FormControl('Male')
    })
  }
formData:Student1;
submitted:boolean=false;
  onSubmit()
  {
    this.formData=new Student1();
    this.submitted=true;
    console.log(this.myReactiveForm);
    this.formData.name=this.myReactiveForm.controls.username.value;
  }

  ngOnInit() {
  }
  noNames(controls:FormControl){

    if(this.notAllowedNames.indexOf(controls.value)!==-1)
    {

      return {'namesNotAllowed':true}
    }
    
    
    return null;


}
// noNames(controls:FormControl){

//   if(this.notAllowedNames.indexOf(controls.value)==0)
//   {
//     this.msg='codeMind not allowed';

//     return {'namesNotAllowed':true}
//   }
//   if (this.notAllowedNames.indexOf(controls.value)==1) {
//     this.msg='technology not allowed';

//     return {'namesNotAllowed':true}
//   }
  
//   return null;


// }



    
}

