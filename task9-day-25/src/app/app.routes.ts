import { Routes } from '@angular/router';
import { SmartProductsComponent } from './features/smart-products/smart-products.component';

export const routes: Routes = [
  { path: 'smart-products', component: SmartProductsComponent },
  { path: '', redirectTo: 'smart-products', pathMatch: 'full' }
];
