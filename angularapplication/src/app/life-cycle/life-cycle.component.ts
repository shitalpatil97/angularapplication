import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges,DoCheck,AfterContentInit,AfterContentChecked, AfterViewInit,AfterViewChecked {
  @Input() uid:string;
  @Input() parentData:string;
  @ContentChild("child",{static:false}) contentChild:ElementRef;
  @ViewChild("view",{static:false}) viewChild:ElementRef;

  constructor() {
    console.log("Constructor called");
   }
  ngAfterViewChecked(): void {
    this.viewChild.nativeElement.setAttribute('style',  `color:${this.parentData}`);
  }
  ngAfterViewInit(): void {
    //this.viewChild.nativeElement.setAttribute('style','background-color:grey','color:red');
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContent Checked called");
    this.contentChild.nativeElement.setAttribute('style','color:red')

    
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
    //this.contentChild.nativeElement.setAttribute('style', 'color:green');    

    
  }
  ngDoCheck(): void {
    console.log("Do check called");
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    for (const prop in changes) {
      const proName=changes[prop];
      let{previousValue,currentValue,firstChange}=proName;
      console.log(`Previous Value: ${previousValue}`);
      console.log(`Current Value: ${currentValue}`);
      console.log(`Is it first change: ${firstChange}`);

      console.log("ngOnChanges called");
      

      
      
    }
  }

  ngOnInit() {
  }

}
