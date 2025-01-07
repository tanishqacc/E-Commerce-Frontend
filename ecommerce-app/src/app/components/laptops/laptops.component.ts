import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.scss']
})
export class LaptopsComponent implements OnInit {
  products !: Product[];

  constructor(private productService: ProductService, private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts().filter(product => product.category === 'laptops');
  }

  viewProductDetails(product: Product): void {
    this.router.navigate(['/product', product.id]);
  }

  addToCart(product: Product): void { 
    this.cartService.addToCart(product);
  }
}
