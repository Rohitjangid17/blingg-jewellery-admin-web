import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  title: string = "Product Details";
  previousPage: string = "Products";

  compressImage() {
    console.log("compress image!!!");
  }
}
