import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {RoleService} from '../../services/role.service';
import {AutoUnsibscribeService} from '../../services/auto-unsibscribe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AppState} from '../../store';
import {NgRedux, select} from '@angular-redux/store';
import {fetchProductsAction} from '../../store/actions/product.actions';
import {Product} from '../../models/product.model';
import {selectProducts, selectProductsIsLoading} from '../../store/selectors/product.selector';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-details-menu',
  templateUrl: './details-menu.component.html',
  styleUrls: ['./details-menu.component.css']
})
export class DetailsMenuComponent extends AutoUnsibscribeService implements OnInit, OnDestroy {

  @select(selectProductsIsLoading)
  private isLoading: Observable<boolean>
  private categoryId: string;
  private products: Product[];

  constructor(private route: ActivatedRoute,
              private ngRedux: NgRedux<AppState>) {
    super();
  }

  ngOnInit() {
    this.getProducts();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  private getProducts(): void {
    this.categoryId = this.route.snapshot.paramMap.get('id');
    this.ngRedux.dispatch(fetchProductsAction(this.categoryId));
    this.isLoading.subscribe(result => {
      if(!result) {
        this.products = selectProducts(this.ngRedux.getState());
      }
    })

  }
}
