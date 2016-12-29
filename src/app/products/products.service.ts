import { Injectable } from '@angular/core';
import {PRODUCTS} from '../data/Products-mock'
import {IProduct} from "../model/Product";
import {LoggerService} from "../util/logger.service.ts";
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';



@Injectable()
export class ProductsService {
  providerUrl : string = "api/products/products.json";
  constructor(private logger : LoggerService,private _http : Http) { }

 /* getProducts() : IProduct[] {
 this.logger.log("Get Products Called..");
 return PRODUCTS;
 }*/

  getProducts() : Observable<IProduct[]> {
    return this._http.get(this.providerUrl).map((response : Response) => <IProduct[]>response.json()).catch(error => this.handleError(error));
  }


  getProduct(id: number): Observable<IProduct> {
     return this.getProducts().map(products => products.filter(product => product.productId === id)[0]).catch(error => this.handleError(error));
    //return this._http.get(this.providerUrl).map((response : Response) => { let products = <IProduct[]>response.json(); return Rx.Observable.fromArray(products)}).concatMap((data : IProduct, index : number)=> { if(data.productId === id){return data;}}).do(data => this.logger.log(JSON.stringify(data))).catch(error => this.handleError(error));
  }


  private handleError(error : Response)  {
    /*this.logger.log(error);*/
    console.log(error.json().error);
    return Observable.throw(error.json().error || 'Server Error');
  }

}
