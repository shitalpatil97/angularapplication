import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rect-project',
  templateUrl: './rect-project.component.html',
  styleUrls: ['./rect-project.component.css']
})
export class RectProjectComponent implements OnInit {
  myForm:FormGroup;
  submit:boolean=false;

  constructor() {
   this.createForm();

   }
   onSubmit(){
    console.log(`Project Name is: ${this.myForm.controls.project.value}`);
    console.log(`Email ID is: ${this.myForm.controls.email.value}`);
    console.log(`Project Status is: ${this.myForm.controls.status.value}`);


    this.submit=true;


   }
  
noNames(control:FormControl): Promise<any> | Observable<any> {
  const myResponse = new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      if(control.value === 'Test'){
        resolve({'emailNotAllowed': true})
      } else {
        resolve(null)
      }
    }, 1000);
  })
  return myResponse;
}
   createForm(){
    this.myForm=new FormGroup({
      'project':new FormControl('',[Validators.required],this.noNames),
      'email':new FormControl('',[Validators.required,Validators.email]),
      'status':new FormControl('Finished',Validators.required)

    })

   }

  ngOnInit() {
    
  }

}
