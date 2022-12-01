import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit {

  constructor() { 
    console.log("Hooks component constructor called");
    
  }

  ngOnInit() {
    console.log("Hooks component ngOnInit method called");
    
  }

}
