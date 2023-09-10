import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  previousPage: string = "Home";
  title: string = "Products";

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  navigateProductDetails(id: number) {
    this._router.navigate(["./product-details/", id], {
      relativeTo: this._activatedRoute
    })
  }
}
