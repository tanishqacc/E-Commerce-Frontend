import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  searchQuery: string = '';
  constructor(private router: Router) {}

  onSearch(event: Event): void {
    event.preventDefault(); // Prevent the default form submission behavior

    const query = this.searchQuery.trim().toLowerCase();

    switch (query) {
      case 'mobiles':
        this.router.navigate(['/mobiles']);
        break;
      case 'laptops':
        this.router.navigate(['/laptops']);
        break;
      case 'tvs':
        this.router.navigate(['/tvs']);
        break;
      case 'tablets':
        this.router.navigate(['/tablets']);
        break;
      case 'contact us':
        this.router.navigate(['/contact-us']);
        break;
      case 'cart':
        this.router.navigate(['/cart']);
        break;
      default:
        alert('Page not found. Please search for a valid category.');
    }

    // Clear the search query
    this.searchQuery = '';
  }

}
