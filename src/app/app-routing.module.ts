import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {PageNotFoundExceptionComponent} from "./page-not-found-exception/page-not-found-exception.component";
import {HomeComponent} from "./home/home.component";
import {ProductDetailComponent} from "./products/product-detail.component.ts";
import {ProductListComponent} from "./products/product-list.component.ts";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path : 'welcome',component : HomeComponent},
      {path : 'products',component : ProductListComponent},
      {path : 'product/:id',component : ProductDetailComponent},
      {path : '',component : HomeComponent},
      {path : '**',component : PageNotFoundExceptionComponent}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
