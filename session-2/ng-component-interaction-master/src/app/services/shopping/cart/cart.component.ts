import { CartService } from '../../cart.service';
import { Product } from './../products/products.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartTotal: number = 0;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cartService.cartUpdated
      .subscribe(
        (product: Product) => {
          this.cartTotal += product.cost;
        }
      );
  }

}
