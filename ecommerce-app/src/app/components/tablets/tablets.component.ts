import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-tablets',
  templateUrl: './tablets.component.html',
  styleUrls: ['./tablets.component.scss']
})
export class TabletsComponent implements OnInit {
  products!: Product[];

  constructor(private productService: ProductService, private cartService: CartService, private router: Router) { }
  

  ngOnInit(): void {
    this.products = this.productService.getProducts().filter(product => product.category === 'tablets');
  }

  viewProductDetails(product: Product): void {
    this.router.navigate(['/product', product.id]);
  }

  addToCart(product: Product): void {
    // Add to cart functionality
    this.cartService.addToCart(product);
  }
}
