import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    // Mobiles
    { id: 1, name: 'iPhone 16 Pro', description: 'iPhone 16 Pro Max 256 GB: 5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods; Black Titanium', image: 'assets/images/iphone16pro.jpg', price: 999, brand: 'Apple', category: 'mobiles', quantity: 10 },
    { id: 2, name: 'Samsung Galaxy S23 Ultra', description: 'Samsung Galaxy S23 Ultra 5G AI Smartphone (Green, 12GB, 256GB Storage)', image: 'assets/images/samsungs23ultra.jpg', price: 799, brand: 'Samsung', category: 'mobiles', quantity: 15 },
    { id: 3, name: 'OnePlus12', description: 'OnePlus 12 (Flowy Emerald, 16GB RAM, 512GB Storage)', image: 'assets/images/Oneplus12.jpg', price: 799, brand: 'OnePlus', category: 'mobiles', quantity: 12 },
    // Tablets
    { id: 4, name: 'Apple iPad Pro 13″ (M4)', description: 'Apple iPad Pro 13″ (M4): Ultra Retina XDR Display, 256GB, Landscape 12MP Front Camera / 12MP Back Camera, LiDAR Scanner, Wi-Fi 6E, Face ID, All-Day Battery Life, Standard Glass — Space Black', image: 'assets/images/iPad1.jpg', price: 1099, brand: 'Apple', category: 'tablets', quantity: 20 },
    { id: 5, name: 'Samsung Galaxy Tab S8', description: 'Samsung Galaxy Tab S8 27.94 cm (11 inch) Display, RAM 8 GB, ROM 128 GB Expandable, S Pen in-Box, Wi-Fi+5G Tablet, Graphite', image: 'assets/images/samsungTab1.jpg', price: 76998, brand: 'Samsung', category: 'tablets', quantity: 10 },
    // TVs
    { id: 6, name: 'LG OLED TV', description: 'LG 139 cm (55 inches) 4K Ultra HD Smart OLED TV 55B3PSA (Black)', image: 'assets/images/lg_oled_tv.jpg', price: 1299, brand: 'LG', category: 'tvs', quantity: 5 },
    { id: 7, name: 'Sony Bravia', description: 'Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart LED Google TV KD-65X74L (Black)', image: 'assets/images/sony_bravia_tv.jpg', price: 1499, brand: 'Sony', category: 'tvs', quantity: 7 },
    // Laptops
    { id: 8, name: 'MacBook Air ', description: 'Apple 2024 MacBook Air (13-inch, Apple M3 chip with 8‑core CPU and 10‑core GPU, 24GB Unified Memory, 512GB) - Midnight', image: 'assets/images/MacbookAir1.jpg', price: 1299, brand: 'Apple', category: 'laptops', quantity: 10 },
    { id: 9, name: 'HP Pavilion Aero AI Laptop', description: 'HP Pavilion Aero AI Laptop, AMD Ryzen 5 8640U, 10-12 Tops, 16GB LPDDR5x, 512GB SSD, 13.3-inch (33.8cm), Ultra-Light, WUXGA, AMD Radeon Graphics, 5MP Camera (Win 11, Office 21, Silver, <1kg) bg0016AU', image: 'assets/images/hp_laptop1.jpg', price: 1199, brand: 'Dell', category: 'laptops', quantity: 8 }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

}
