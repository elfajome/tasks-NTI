What binding types used:
- Interpolation: {{ userName }}, {{ product.name }}
- Property Binding: [disabled]="products.length === 0"
- Event Binding: (click)="toggleLogin()"
- Two-way Binding: [(ngModel)]="searchText"
- Class Binding: [class.active]="status === 'loading'"
- Style Binding: [style.color]="product.price > 1000 ? 'red' : 'green'"

What control-flow blocks used:
- @if / @else: For login state and stock status
- @switch / @case / @default: For status alerts
- @for / track / @empty: For rendering the products list and empty state


