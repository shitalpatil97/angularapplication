import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btnassign',
  templateUrl: './btnassign.component.html',
  styleUrls: ['./btnassign.component.css']
})
export class BtnassignComponent implements OnInit {
Item:string;
arr:any[]=[];
name:string;

addItem(item){
  this.arr.push({name:item});
  console.log(this.arr);
  


}
onReset(i){
this.arr.splice(i,1);
  
}
  constructor() { }
  

  ngOnInit() {
  }

}
