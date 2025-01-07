import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems$ = this.cartService.cartItems$;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  updateQuantity(product: Product, quantity: number): void {
    this.cartService.updateQuantity(product, quantity);
  }

  removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}
