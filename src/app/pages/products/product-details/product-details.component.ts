import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductDetails } from 'src/app/core/interfaces/common';
import { CommonService } from 'src/app/core/services/common.service';

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
    private _formBuilder: FormBuilder,
    private _commonService: CommonService
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
    let productData: ProductDetails = {
      productName: this.productCreateForm.get('productName')?.value,
      productCategory: this.productCreateForm.get('productCategory')?.value,
      productPrice: this.productCreateForm.get('productPrice')?.value,
      productDiscountPrice: this.productCreateForm.get('productDiscountPrice')?.value,
      productDescription: this.productCreateForm.get('productDescription')?.value,
    }

    this._commonService.productCreate(productData).subscribe((res: ProductDetails) => {
      console.log(res);
    })
  }
}
