import { Component,OnInit} from '@angular/core';
import {IProduct} from "../model/Product";
import {ProductsService} from "./products.service.ts";
import {Observable} from "../../../node_modules/rxjs/Observable.d";

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle : string = "Product List";
  imageWidth : number = 50;
  imageMargin : number = 2;
  showImage : boolean = false;
  listFilter : string = "Cart";
  products : IProduct[];
 errorMessage : string;
  ngOnInit() : void {
    console.log("ON Init called...");
    this.productsService.getProducts().subscribe(products => this.setProducts(products),error => this.errorMessage = <any> error);
  }

  constructor(private productsService : ProductsService) {

  }

  setProducts(products : IProduct[]) : void {
    this.products = products;
  }

  toggleImage() : boolean {
    return this.showImage = !this.showImage;
  }

  onRatingClick(message) : void {
    this.pageTitle = this.pageTitle + ":" + message;
    console.log(message);
  }
}
