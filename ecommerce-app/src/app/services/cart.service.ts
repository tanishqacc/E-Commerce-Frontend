import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: { product: Product, quantity: number }[] = [];
  private cartItemsSubject = new BehaviorSubject<{ product: Product, quantity: number }[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {}

  addToCart(product: Product): void {
    const item = this.cartItems.find(item => item.product.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
    this.updateCartItems();
  }

  removeFromCart(product: Product): void {
    const index = this.cartItems.findIndex(item => item.product.id === product.id);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
    this.updateCartItems();
  }

  updateQuantity(product: Product, quantity: number): void {
    const item = this.cartItems.find(item => item.product.id === product.id);
    if (item && quantity > 0) {
      item.quantity = quantity;
    } else if (item && quantity === 0) {
      this.removeFromCart(product);
    }
    this.updateCartItems();
  }


  getItemQuantity(product: Product): number {
    const item = this.cartItems.find(item => item.product.id === product.id);
    return item ? item.quantity : 0;
  }
  


  getCartItems(): { product: Product, quantity: number }[] {
    return this.cartItems;
  }

  clearCart(): void {
    this.cartItems = [];
    this.updateCartItems();
  }

  private updateCartItems(): void {
    this.cartItemsSubject.next([...this.cartItems]);
  }
}
