import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-smart-products',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './smart-products.component.html',
  styleUrl: './smart-products.component.css'
})
export class SmartProductsComponent {
  isLoggedIn = false;
  userName = 'Ahmed';
  searchText = '';
  status: 'loading' | 'success' | 'error' | 'idle' = 'idle';

  products = [
    { id: 1, name: 'Wireless Mouse', price: 250, category: 'Accessories', inStock: true },
    { id: 2, name: 'Mechanical Keyboard', price: 1200, category: 'Accessories', inStock: true },
    { id: 3, name: 'USB-C Hub', price: 600, category: 'Accessories', inStock: false },
    { id: 4, name: '27 Monitor', price: 4500, category: 'Displays', inStock: true },
  ];

  private originalProducts = [...this.products];

  get filteredProducts() {
    const q = this.searchText.trim().toLowerCase();
    if (!q) return this.products;
    return this.products.filter(p => p.name.toLowerCase().includes(q));
  }

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  setStatus(newStatus: 'loading' | 'success' | 'error' | 'idle') {
    this.status = newStatus;
  }

  clearProducts() {
    this.products = [];
  }

  resetProducts() {
    this.products = [...this.originalProducts];
  }
}
