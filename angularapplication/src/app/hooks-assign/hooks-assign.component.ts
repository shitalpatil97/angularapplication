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

      console.log(`Prop name ${propname}`);
      console.log(`Prev  value ${previousValue}`);
      console.log(`Current value ${currentValue}`);
      console.log(`First change ${firstChange}`);
      console.log("---------------")

    }
    
  }

  ngOnInit() {
  }

}
