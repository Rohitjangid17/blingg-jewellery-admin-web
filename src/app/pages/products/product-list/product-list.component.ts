import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/interfaces/common';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  previousPage: string = "Home";
  title: string = "Products";
  productList: Product[] = [];

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.getProductList()
  }

  navigateProductDetails(id: number) {
    this._router.navigate(["./product-details/", id], {
      relativeTo: this._activatedRoute
    })
  }

  getProductList() {
    this._commonService.getProductList().subscribe((productRes: Product[]) => {
      this.productList = productRes;
      console.log(this.productList);
    })
  }
}
