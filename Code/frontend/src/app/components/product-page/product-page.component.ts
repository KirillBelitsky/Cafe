import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../../models/product.model';
import {AutoUnsibscribeService} from '../../services/auto-unsibscribe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {Observable} from 'rxjs';
import {ProductImageService} from '../../utils/product-image-service';
import {NgRedux, select} from '@angular-redux/store';
import {AppState} from '../../store';
import {selectProductAction} from '../../store/actions/current-product.actions';
import {
  currentProductIsLoading,
  selectCurrentProduct
} from '../../store/selectors/current-product.selector';
import {addProductToSalesOrder} from '../../store/actions/current-sales-order.action';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent extends AutoUnsibscribeService implements OnInit, OnDestroy {

  @select(currentProductIsLoading)
  private currentProductIsLoading: Observable<boolean>;
  private id: string;
  private product: Product;

  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute,
              private productImageService: ProductImageService,
              private ngRedux: NgRedux<AppState>) {
    super();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getData();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  private getData(): void {
    this.ngRedux.dispatch(selectProductAction(this.id));
    this.currentProductIsLoading.subscribe((value) => {
      if (!value) {
        this.product = selectCurrentProduct(this.ngRedux.getState());
      }
    });
  }

  private onOrderClick(): void {
    this.ngRedux.dispatch(addProductToSalesOrder(this.product.id));
  }

  private getImage(): string {
    return this.productImageService.getImageSrc(this.id);
  }

}
