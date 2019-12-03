import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {SalesOrder} from '../models/sales-order.model';
import {catchError} from 'rxjs/operators';

@Injectable()
export class SalesOrderService {

  private SALES_ORDER_URL = '/api/salesorder';

  constructor(private httpClient: HttpClient){
  }

  public getCurrentSalesOrder(): Observable<SalesOrder> {
    return this.httpClient.get<SalesOrder>(`${this.SALES_ORDER_URL}/getCurrentSO`)
      .pipe(catchError((err) => throwError(err.error)));
  }

  public submitSalesOrder(salesOrder: SalesOrder): Observable<SalesOrder> {
    return this.httpClient.post<SalesOrder>(`${this.SALES_ORDER_URL}/submit`, salesOrder)
      .pipe(catchError((err) => throwError(err.error)));
  }

  public addProductToSO(id: string): Observable<SalesOrder> {
    return this.httpClient.get<SalesOrder>(`${this.SALES_ORDER_URL}/addProduct/${id}`)
      .pipe(catchError((err) => throwError(err.error)));
  }

  public removeProductInSO(id: string): Observable<SalesOrder> {
    return this.httpClient.get<SalesOrder>(`${this.SALES_ORDER_URL}/removeProduct/${id}`)
      .pipe(catchError((err) => throwError(err.error)));
  }
}
