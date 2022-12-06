import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {
@Input() userId:number;
@Input() parentData: string;
@Input() product: any;
@ContentChild("child", {static:false}) contentChild:ElementRef;
@ViewChild("childHook",{static:false}) viewChild:ElementRef;
  constructor() { 
    console.log("Hooks component constructor called");
    
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called')
    this.viewChild.nativeElement.setAttribute('style',  `color:${this.parentData}`);
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called', this.viewChild);
  // this.viewChild.nativeElement.setAttribute('style',  `color:${this.parentData}`);
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
    this.contentChild.nativeElement.setAttribute('style', `color:${this.parentData}`);  }
  ngAfterContentInit(): void {
    console.log(' ngAfterContentInit called', this.contentChild);
    console.log('view int access', this.viewChild);
   // this.contentChild.nativeElement.setAttribute('style', 'color:green');

   //this.contentChild.nativeElement.setAttribute('style', `color:${this.parentData}`);
  }
  ngDoCheck(): void {
    console.log(' ngDoCheck called', this.contentChild);
  }
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
    console.log("Hooks component ngOnInit method called");
    
  }

}
