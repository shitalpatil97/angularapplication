import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  employee=new  Employee;
// userName =new Subject<object>();
// emp={id:'1',name:'shital',salary:'50000',dept:'developing'}
userName=new BehaviorSubject<any>(this.employee);

  constructor() {
    
    
    
   }
}
