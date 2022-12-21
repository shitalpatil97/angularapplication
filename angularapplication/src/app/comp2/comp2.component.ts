import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
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
    this._utilityService.userName.next(id.value);

    this._utilityService.userName.next(uname.value);
    this._utilityService.userName.next(dept.value);
    this._utilityService.userName.next(sal.value);

    
  }

}
