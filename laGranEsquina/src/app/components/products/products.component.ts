//import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Iproducts, Icart } from '../../interfaces';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
  
})
export class ProductsComponent implements OnInit {

  @Input() products!: Iproducts;
  cart: Icart[];

  constructor(
    private afAuth: AngularFireAuth,
      private router: Router,
  ) {
    this.cart = [];
  }

  ngOnInit(): void {
    console.log(this.products);
  }
  add(): void {
    this.cart = JSON.parse(localStorage.getItem('cart')!);
    this.cart.push({ name:this.products.name,price:this.products.price,quantity:1})
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  logOut() {
    this.afAuth.signOut().then(() => this.router.navigate(['/login']));

}
}