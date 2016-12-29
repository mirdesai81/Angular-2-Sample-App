import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {Http} from '@angular/http';
import {ProductsService} from "./products.service.ts";
import {IProduct} from "../model/Product";
import {LoggerService} from "../util/logger.service.ts";


@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage: string;
  id : number;
  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _productService: ProductsService,private _logger : LoggerService) {
  }

  ngOnInit(): void {
   /* this.sub = this._route.params.subscribe(
      params => {
        let id = +params['id'];
        this.getProduct(id);
      });*/

    this._route.params
      .switchMap((params: Params) => this._productService.getProduct(+params['id']))
      .subscribe( (data : IProduct) => { this.product = data; this._logger.log(JSON.stringify(data)); },
                  error => this.errorMessage = <any>error);

    /*this._productService.getProduct(this.id)*/
    /*this._logger.log(JSON.stringify(this.product));*/

  }

  ngOnDestroy() {
    /*this.sub.unsubscribe();*/
  }

  setProduct(product : IProduct) : void {
      this.product = product;
  }


  getProduct(id: number) {
    this._logger.log(""+id);
    this._productService.getProduct(id).subscribe(
      product => {this._logger.log(JSON.stringify(product)); this.product = product;},
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product Detail: ' + message;
  }
}
