import {Component, OnDestroy, OnInit} from '@angular/core';
import {AutoUnsibscribeService} from '../../services/auto-unsibscribe.service';
import {NgRedux, select} from '@angular-redux/store';
import {AppState} from '../../store';
import {SalesOrder} from '../../models/sales-order.model';
import {currentSalesOrder, currentSalesOrderIsLoading} from '../../store/selectors/current-sales-order.selector';
import {Observable} from 'rxjs';
import {
  addProductToSalesOrder,
  removeProductInSalesOrder,
  submitCurrentSalesOrder
} from '../../store/actions/current-sales-order.action';
import {MatConfirmDialogService} from '../dialogs/mat-confirmation-dialog/mat-confirm-dialog.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent extends AutoUnsibscribeService implements OnInit, OnDestroy {

  @select(currentSalesOrderIsLoading)
  private isLoading: Observable<boolean>;
  private salesOrder: SalesOrder;
  private productsId: string[];

  constructor(private ngRedux: NgRedux<AppState>,
              private confirmService: MatConfirmDialogService,
              private dialog: MatConfirmDialogService) {
    super();
  }

  ngOnInit(): void {
    this.getSalesOrder();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  private getSalesOrder(): void {
    this.isLoading.subscribe(value => {
      if(!value) {
        this.salesOrder = currentSalesOrder(this.ngRedux.getState());
        this.productsId = Array.from(this.salesOrder.productsQuantity.keys());
      }
    });
  }

  onAddClick(id: string): void {
    this.ngRedux.dispatch(addProductToSalesOrder(id));
    this.isLoading.subscribe(value => {
      if(!value) {
        this.salesOrder = currentSalesOrder(this.ngRedux.getState());
        this.productsId = Array.from(this.salesOrder.productsQuantity.keys());
      }
    });
  }

  onRemoveClick(id: string): void {
    this.ngRedux.dispatch(removeProductInSalesOrder(id));
    this.isLoading.subscribe(value => {
      if(!value) {
        this.salesOrder = currentSalesOrder(this.ngRedux.getState());
        this.productsId = Array.from(this.salesOrder.productsQuantity.keys());
      }
    });
  }

  onSubmitClick(): void {
    this.confirmService.openConfirmDialog("Are you sure you want to submit sales order?")
      .afterClosed().pipe(takeUntil(this.streamEndSubject)).subscribe(response => {
        if(response) {
          this.ngRedux.dispatch(submitCurrentSalesOrder(this.salesOrder));
          this.isLoading.subscribe(value => {
            if (!value) {
              this.salesOrder = currentSalesOrder(this.ngRedux.getState());
              this.productsId = Array.from(this.salesOrder.productsQuantity.keys());

              this.confirmService.openSuccessfullyPopup("Sales order was submitted successfully!");
            }
          });
        }
    });
  }

  getProductName(id: string) {
    return this.salesOrder.products.find(value => value.id === id).name;
  }

  getProductDescription(id: string) {
    return this.salesOrder.products.find(value => value.id === id).description;
  }

  getProductPrice(id: string, count: number) {
    return this.salesOrder.products.find(value => value.id === id).price * count;
  }

  getProductCount(id: string) {
    return this.salesOrder.productsQuantity.get(id);
  }
}
