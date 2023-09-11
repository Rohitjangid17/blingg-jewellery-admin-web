import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  title: string = "Product Details";
  previousPage: string = "Products";

  productCreateForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.productCreateForm = this._formBuilder.group({
      productName: ["", Validators.required],
      productCategory: ["", Validators.required],
      productPrice: ["", Validators.required],
      productDiscountPrice: ["", Validators.required],
      productDescription: ["", Validators.required],
    })
  }

  compressImage() {
    console.log("compress image!!!");
  }

  onCreateProduct() {
    console.log("product create api called!!!");
  }
}
