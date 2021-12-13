import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OnlineShopServiceService } from './online-shop-service.service';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public products: Product[] = [];

  constructor(private onlineShopService: OnlineShopServiceService) { }

  ngOnInit(): void {
      this.getProducts();
  }

  public getProducts() : void{
    this.onlineShopService.getProducts().subscribe(
        (response: Product[]) =>{
          this.products = response;
        },
        (error: HttpErrorResponse) =>{
          alert(error.message)
        }
    );
  }


}
