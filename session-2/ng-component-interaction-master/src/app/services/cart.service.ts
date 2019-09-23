import { Injectable, EventEmitter } from '@angular/core';
import { Product } from './shopping/products/products.component';
import { of, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartUpdated = new Subject();

  constructor() { }

  addProduct(product: Product) {
    this.cartUpdated.next(product);
  }
}
