import { CartService } from '../../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    { name: 'XBox One', cost: 280, imgUrl: 'https://compass-ssl.xbox.com/assets/05/b0/05b01a46-58eb-4927-ad21-3c43b545ebaf.jpg?n=X1S-2019_Panes-2-Up-1084_111_570x400.jpg'},
    { name: 'PS 4', cost: 520, imgUrl: 'https://i5.walmartimages.com/asr/33de3a32-863c-4457-9cce-1fb65036d73c_1.93c6433ebb65dc7ef7d0a3d30dee21fc.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF'},
    { name: 'XBox Game Controller', cost: 30, imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Microsoft-Xbox-One-controller.jpg'},
    { name: 'Fifa 20', cost: 50, imgUrl: 'https://c1-ebgames.eb-cdn.com.au/merchandising/images/packshots/08956caf92a646e09950fb31b6cf30a4_Large.jpg'},
  ];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

  addToCart(product: Product) {
    this.cartService.addProduct(product);
  }

}

export interface Product{
  name: string;
  cost: number;
  imgUrl: string;
}
