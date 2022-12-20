import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  products=[{id:'1', name:'Shital'},
  {id:'2', name:'Pravin'}];
  apiURL='https://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient) { }
  display(){
    alert("subScribed successfully")
  }
  getUsersData()
  {
   return this.http.get(this.apiURL);
  }

}
