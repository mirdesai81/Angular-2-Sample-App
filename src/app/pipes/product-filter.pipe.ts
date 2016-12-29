import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from "../model/Product";

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: IProduct[], filterValue: string): IProduct[] {
    console.log(filterValue);
    let filter : string = filterValue ? filterValue.toLocaleLowerCase() : null;

    var products : IProduct[] = filter ? value.filter((product : IProduct) => product.productName.toLocaleLowerCase().indexOf(filter) != -1) : value;
    console.log("Filter : "+filter+ " value: "+products);
    return products;
  }

}
