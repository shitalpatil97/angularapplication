import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks-assign',
  templateUrl: './hooks-assign.component.html',
  styleUrls: ['./hooks-assign.component.css']
})
export class HooksAssignComponent implements OnInit {

  @Input() color:string;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    console.log("HooksComponent ngOnChanges called");
    for (const propname in changes) {
      const prop = changes[propname];

      const {previousValue, currentValue, firstChange} = prop;

      console.log(`Color name : ${propname}`);
      console.log(`Previous selected color is:  ${previousValue}`);
      console.log(`Current selected color is: ${currentValue}`);
      console.log(`Is it first change : ${firstChange}`);
      console.log("**********************************************************************************")

    }
    
  }

  ngOnInit() {
  }

}
