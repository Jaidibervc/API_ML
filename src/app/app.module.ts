import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { ListProductsComponent } from './component/list-products/list-products.component';
import {MercadoLibreService } from './services/mercadolibre.service'

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule    
  ],
  providers: [MercadoLibreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
