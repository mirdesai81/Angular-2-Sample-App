import './rxjs-extensions';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { StarComponent } from './star/star.component';
import {ProductsService} from "./products/products.service";
import {LoggerService} from "./util/logger.service";
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { PageNotFoundExceptionComponent } from './page-not-found-exception/page-not-found-exception.component';
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    HomeComponent,
    ProductDetailComponent,
    PageNotFoundExceptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ProductsService,{ provide : LoggerService , useClass : LoggerService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
