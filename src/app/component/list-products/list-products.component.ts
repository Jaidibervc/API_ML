import { Component, OnInit } from '@angular/core';
import {MercadoLibreService} from '../../services/mercadolibre.service'

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  criteria:string = ''
  product:string=''
  products=[]

  constructor(private mercadoservice: MercadoLibreService) { 

  }

  ngOnInit() {
    
  }

  metodoBuscar(){
    this.mercadoservice.Search_product(this.criteria).subscribe(result => {
      this.products=result.json().results
      console.log(this.products)
    })
  }
  


}
