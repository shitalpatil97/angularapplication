import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
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
