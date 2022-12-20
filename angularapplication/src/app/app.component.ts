import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { DemoService } from './services/demo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public uid: number;
  public colors:string;

  title = 'angularapplication';
  data:string='Red';
  name: string;
  price: number;
  userName:string;
  product: Product = new Product();
  appChildExist: boolean = true;
  array=[];
  constructor(private _demoService: DemoService){
    
  }
  ngOnInit(): void {
    this._demoService.getUsersData().subscribe(data => {
      console.log('getting data from api', data)
      this.array.push(data);
      // console.log(this.array);
      
    })
  }



 destroy() {
  this.appChildExist = false;
 }

  handleData(value) {
    this.data = value.target.value;
  }
  updateProduct() {
    //this.product = new Product();
    this.product.name = this.name;
    this.product.price = this.price;
  }
  showDetails(value){
    this.userName=value;
    
  }
  

}
