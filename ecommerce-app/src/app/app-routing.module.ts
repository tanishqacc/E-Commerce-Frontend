import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MobilesComponent } from './components/mobiles/mobiles.component';
import { TabletsComponent } from './components/tablets/tablets.component';
import { TVsComponent } from './components/tvs/tvs.component';
import { LaptopsComponent } from './components/laptops/laptops.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
// import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'mobiles', component: MobilesComponent },
  { path: 'tablets', component: TabletsComponent },
  { path: 'tvs', component: TVsComponent },
  { path: 'laptops', component: LaptopsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  // { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
