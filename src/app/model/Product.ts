export interface IProduct {
  productId : number;
  productName : string;
  productCode : string;
  releaseDate : string;
  description : string;
  price : number;
  starRating : number;
  imageUrl : string;
  /*calculateDiscount(percent : number) : number;*/
}


/*
class Product implements IProduct {
  productId : number;
  productName : string;
  productCode : string;
  releaseDate : string;
  description : string;
  price : number;
  starRating : number;
  imageUrl : string;

  constructor(productId : number,
  productName : string,
  productCode : string,
  releaseDate : string,
  description : string,
  price : number,
  starRating : number,
  imageUrl : string) {
    this.productId = productId;
    this.productName = productName;
    this.productCode = productCode;
    this.releaseDate = releaseDate;
    this.description = description;
    this.price = price;
    this.starRating = starRating;
    this.imageUrl = imageUrl;
  }
}*/
