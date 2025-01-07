import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss']
})
export class MobilesComponent implements OnInit {
  products !: Product[];

  constructor(
    private productService: ProductService, 
    private cartService: CartService, 
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // setTimeout(()=>{
    //   this.router.navigate(['/home']);
    // },10000);
    this.products = this.productService.getProducts().filter(product => product.category === 'mobiles');

  }

  viewProductDetails(product: Product): void {
    this.router.navigate(['/product', product.id]);
  }

  addToCart(product: Product): void {
    // Add to cart functionality
    this.cartService.addToCart(product);
  }

  removeFromCart(product: Product): void {
     this.cartService.removeFromCart(product); 
    } 
    
  incrementQuantity(product: Product): void { 
    this.cartService.updateQuantity(product, this.getItemQuantity(product) + 1); 
  } 
  
  decrementQuantity(product: Product): void { 
    this.cartService.updateQuantity(product, this.getItemQuantity(product) - 1); 
  } 
  
  
  getItemQuantity(product: Product): number { 
    return this.cartService.getItemQuantity(product); 
  }


}
