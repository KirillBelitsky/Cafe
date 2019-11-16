import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Product} from '../models/product.model';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ProductService {
  private PRODUCT_URL = '/api/product';

  constructor(private httpClient: HttpClient) {
  }

  public getProductById(id: string): Observable<Product> {
    return this.httpClient.get<Product>(`${this.PRODUCT_URL}/${id}`)
      .pipe(catchError((error: any) => throwError(error.error)));
  }

  public getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.PRODUCT_URL}/all`)
      .pipe(catchError((error: any) => throwError(error.error)));
  }
}
