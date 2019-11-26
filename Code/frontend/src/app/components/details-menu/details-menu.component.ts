import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {RoleService} from '../../services/role.service';
import {AutoUnsibscribeService} from '../../services/auto-unsibscribe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AppState} from '../../store';
import {NgRedux} from '@angular-redux/store';
import {fetchProductsAction} from '../../store/actions/product.actions';

@Component({
  selector: 'app-details-menu',
  templateUrl: './details-menu.component.html',
  styleUrls: ['./details-menu.component.css']
})
export class DetailsMenuComponent extends AutoUnsibscribeService implements OnInit, OnDestroy {

  private categoryId: string;

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
  }
}
