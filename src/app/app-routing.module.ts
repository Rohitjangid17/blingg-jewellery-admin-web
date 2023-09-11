import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { ProductDetailsComponent } from './pages/products/product-details/product-details.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { PagesComponent } from './pages/pages/pages.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SliderImageComponent } from './pages/slider-image/slider-image.component';

const routes: Routes = [
  {
    path: "", redirectTo: "home", pathMatch: "full"
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "orders", component: OrdersComponent
  },
  {
    path: "", component: ProductsComponent, children: [
      {
        path: "products", component: ProductListComponent
      },
      {
        path: "products/product-details/:id", component: ProductDetailsComponent, pathMatch: "full"
      }
    ]
  },
  {
    path: "categories", component: CategoriesComponent
  },
  {
    path: "pages", component: PagesComponent
  },
  {
    path: "slider-image", component: SliderImageComponent
  },
  {
    path: "settings", component: SettingsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
