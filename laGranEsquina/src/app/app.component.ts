import { Component,Output,EventEmitter } from '@angular/core';

import {Iproducts,Icart} from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'laGranEsquina';
  products:Iproducts[];
  cart:Icart[]=[];
  show:boolean;
 
  
  
  constructor() {
    this.products=[];
    localStorage.setItem('cart',JSON.stringify([]));
    this.show=false;
  }
  ngOnInit() {

    this.products = [
      { id: 1,categoria:'Bebidas',subcategoria:'Gaseosa', name: 'Inca Kola', description: 'Gaseosa Inca Kola 500ml', price: 15, img: '../../../assets/productsImg/IncaKola.jpg' },
      { id: 2,categoria:'Bebidas',subcategoria:'Gaseosa', name: 'Coca Cola', description: 'Gaseosa Coca Kola 500ml', price: 19, img: '../../../assets/productsImg/CocaCola.jpg' },
      { id: 3,categoria:'Bebidas',subcategoria:'Bebida Energetica', name: 'Red Bull', description: 'Bebida Energetica Red Bull 250ml', price: 15, img: '../../../assets/productsImg/RedBull.jpg' },
      { id: 4,categoria:'Bebidas',subcategoria:'Bebida Energetica', name: 'Monster', description: 'Bebida Energetica Monster Energy 473ml', price: 20, img: '../../../assets/productsImg/Monster.jpg' },
      { id: 5,categoria:'Bebidas',subcategoria:'Agua', name: 'Agua Cielo', description: 'Agua Mineral Cielo 600ml', price: 15, img: '../../../assets/productsImg/Cielo.jpg' },
      { id: 6,categoria:'Bebidas',subcategoria:'Gaseosa', name: 'Sprite', description: 'Gaseosa Sprite 500ml', price: 20, img: '../../../assets/productsImg/Sprite.jpg' }
    ]
    
  }

  toogleCart(){
    this.show=!this.show;
  }

}
  