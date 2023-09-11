import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductDetails } from '../interfaces/common';
import { Observable } from "rxjs"
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
}
