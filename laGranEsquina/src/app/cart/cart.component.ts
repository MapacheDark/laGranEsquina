import { Component, OnInit } from '@angular/core';
import { Icart } from '../interfaces';
@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Icart[];
  constructor() { 
    this.cart= JSON.parse(localStorage.getItem('cart')!);
  }
  ngOnInit(): void {
  }
}
