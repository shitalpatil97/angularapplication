import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Student1 } from '../models/stud';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  myReactiveForm:FormGroup;
  sub:boolean=false;
  genders=[{id:1, value:'Male'}, {id:2, value:'Female'}];
  notAllowedNames=['codeMind','technology'];
  msg:string="";
  // submitted:boolean=false;
  // formData:Student1;

  constructor( private _fb:FormBuilder) {
    this.createForm();
   }

  createForm(){
    // this.myReactiveForm=new FormGroup({
    //   'userDetails':new FormGroup({
    //     'username':new FormControl('', [Validators.required,Validators.minLength(5),this.noNames.bind(this)]),
    //   'email':new FormControl('', [Validators.required,Validators.email],this.NaEmails)

    //   }),
      
    //   'course':new FormControl('Angular'),
    //   'gender':new FormControl('Male'),
    //   'skills': new FormArray([
    //     new FormControl(null,Validators.required)
    //   ])
    // })
    this.myReactiveForm = this._fb.group({
      userDetails: this._fb.group({
        username: ['', Validators.required],
        email: ['', Validators.required]
      }),
      course: ['Angular'],
      gender: ['Male'],
      skills: this._fb.array([])
    })

  }
formData:Student1;
submitted:boolean=false;
  onSubmit()
  {
    this.formData=new Student1();
    this.submitted=true;
    this.sub=true;

    console.log(this.myReactiveForm);
    this.formData.name=this.myReactiveForm['controls'].userDetails['controls'].username.value;
    this.formData.email=this.myReactiveForm['controls'].userDetails['controls'].email.value;
    this.formData.course=this.myReactiveForm.controls.course.value;
    this.formData.gender=this.myReactiveForm.controls.gender.value;



  }
  addClick(){
    (<FormArray>((this.myReactiveForm.get('skills')))).push(new FormControl(null, Validators.required));
  }
  removeSkills(i:number){
   (<FormArray> this.myReactiveForm.get('skills')).removeAt(i);
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.myReactiveForm.patchValue({
    //     'userDetails' : {
    //       'username': 'Codemind1122',
    //       'email': 'test@gmail.com'
    //     }
    //   })
    // }, 3500);
    setTimeout(() => {
      this.myReactiveForm.patchValue({
        'userDetails' : {
          'username': 'Codemind1122',
          'email': 'test@gmail.com'
        },
        'course': 'HTML',
        'gender': 'Male'
        
      })
    }, 3500);


  }
  noNames(controls:FormControl){

    if(this.notAllowedNames.indexOf(controls.value)!==-1)
    {

      return {'namesNotAllowed':true}
    }
    
    
    return null;


}
NaEmails(control:FormControl): Promise<any> | Observable<any> {
  const myResponse = new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      if(control.value === 'codemindtechnology@gmail.com'){
        resolve({'emailNotAllowed': true})
      } else {
        resolve(null)
      }
    }, 3000);
  })
  return myResponse;
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

