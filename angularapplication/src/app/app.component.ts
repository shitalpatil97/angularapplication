import { Component } from '@angular/core';
import { Product } from './models/product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public uid: number;
  public colors:string;

  title = 'angularapplication';
  data:string='Red';
  name: string;
  price: number;
  product: Product = new Product();
  handleData(value) {
    this.data = value.target.value;
  }
  updateProduct() {
    //this.product = new Product();
    this.product.name = this.name;
    this.product.price = this.price;
  }
}
