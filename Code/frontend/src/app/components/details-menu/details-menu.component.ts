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
import {selectCurrentMenuCategory} from '../../store/actions/current-menu-category.action';
import {currentMenuCategory, currentMenuCategoryIsLoading} from '../../store/selectors/current-menu-category.selector';
import {MenuCategory} from '../../models/menu-category.model';

@Component({
  selector: 'app-details-menu',
  templateUrl: './details-menu.component.html',
  styleUrls: ['./details-menu.component.css']
})
export class DetailsMenuComponent extends AutoUnsibscribeService implements OnInit, OnDestroy {

  @select(selectProductsIsLoading)
  private isLoading: Observable<boolean>;
  @select(currentMenuCategoryIsLoading)
  private categoryIsLoading: Observable<boolean>;
  private code: string;
  private products: Product[];
  private menuCategory: MenuCategory;

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
    this.code = this.route.snapshot.paramMap.get('code');
    this.ngRedux.dispatch(selectCurrentMenuCategory(this.code));
    this.ngRedux.dispatch(fetchProductsAction(this.code));
    this.isLoading.subscribe(result => {
      if(!result) {
        this.products = selectProducts(this.ngRedux.getState());
      }
    });
    this.categoryIsLoading.subscribe(result => {
      this.menuCategory = currentMenuCategory(this.ngRedux.getState());
    })
  }
}
