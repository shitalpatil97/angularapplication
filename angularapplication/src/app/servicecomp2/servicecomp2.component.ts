import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-servicecomp2',
  templateUrl: './servicecomp2.component.html',
  styleUrls: ['./servicecomp2.component.css']
})
export class Servicecomp2Component implements OnInit {
  prod={};

  constructor(private _demoService:DemoService) { }

  onSubscribe(){
    this._demoService.display();
  }

  ngOnInit() {
    this.prod=this._demoService.products;
  }

}
