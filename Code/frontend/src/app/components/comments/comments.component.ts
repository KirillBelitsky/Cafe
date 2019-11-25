import {Component, Input, OnDestroy, OnInit} from '@angular/core';
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
import {selectIsLoading} from '../../store/selectors/product.selector';
import {selectCurrentUser, selectLoginOfCurrentUser} from '../../store/selectors/current-user.selector';
import {FormBuilder, FormGroup} from '@angular/forms';
import {fetchCommentsAction} from '../../store/actions/comment.actions';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent extends AutoUnsibscribeService implements OnInit, OnDestroy {

  @Input('productId')
  private productId: string;
  private commentForm: FormGroup;

  constructor(private fb: FormBuilder,
              private ngRedux: NgRedux<AppState>) {
    super();
  }

  ngOnInit(): void {
    this.ngRedux.dispatch(fetchCommentsAction(this.productId));

    this.commentForm = this.fb.group({
      commentText: ['']
    });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  private onSaveClick() {

  }

}
