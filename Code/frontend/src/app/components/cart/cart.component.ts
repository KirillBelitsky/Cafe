import {Component, OnDestroy, OnInit} from '@angular/core';
import {AutoUnsibscribeService} from '../../services/auto-unsibscribe.service';
import {NgRedux, select} from '@angular-redux/store';
import {AppState} from '../../store';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SalesOrder} from '../../models/sales-order.model';
import {currentSalesOrder} from '../../store/selectors/current-sales-order.selector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent extends AutoUnsibscribeService implements OnInit, OnDestroy {

  private salesOrder: SalesOrder;

  constructor(private fb: FormBuilder,
              private ngRedux: NgRedux<AppState>) {
    super();
  }

  ngOnInit(): void {
    this.getSalesOrder();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  private getSalesOrder(): void {
    this.salesOrder = currentSalesOrder(this.ngRedux.getState());
  }
}
