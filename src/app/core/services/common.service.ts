import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, ProductDetails } from '../interfaces/common';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BASE_URL } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  apiUrl: string = `${BASE_URL}/product.json`;

  constructor(
    private _httpClient: HttpClient
  ) { }

  productCreate(data: ProductDetails): Observable<ProductDetails> {
    return this._httpClient.post<ProductDetails>(this.apiUrl, data);
  }

  getProductList(): Observable<Product[]> {
    return this._httpClient.get<{ [key: string]: ProductDetails }>(this.apiUrl).pipe(map(res => {
      const productDetailsArray: Product[] = [];
      for (const key in res) {
        if (res.hasOwnProperty(key)) {
          productDetailsArray.push({ ...res[key], id: key })
        }
      }
      return productDetailsArray;
    }))
  }
}
