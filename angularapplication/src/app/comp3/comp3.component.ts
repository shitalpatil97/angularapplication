import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  userName:any;
  constructor(private _utilityService:UtilityService) {
    this._utilityService.userName.subscribe(res=>{
      this.userName=res;
      console.log(this.userName);

      
    })
   }
  ngOnInit() {
  }
  updateUser(id,uname,dept,sal){
    // console.log(uname.value);
    this._utilityService.userName.next(uname.value);
    this._utilityService.userName.next(id.value);
    this._utilityService.userName.next(dept.value);
    this._utilityService.userName.next(sal.value);



    
  }

}
