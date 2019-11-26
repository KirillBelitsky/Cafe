import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AutoUnsibscribeService} from '../../services/auto-unsibscribe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {NgRedux, select} from '@angular-redux/store';
import {AppState} from '../../store';
import {
  currentProductIsLoading,
  selectCurrentProduct
} from '../../store/selectors/current-product.selector';
import {FormBuilder, FormGroup} from '@angular/forms';
import {fetchCommentsAction, saveCommentAction} from '../../store/actions/comment.actions';
import {fetchComments, fetchCommentsIsLoading} from '../../store/selectors/comment.selector';
import {Comment} from '../../models/comment.model';
import {User} from '../../models/user.model';
import {selectCurrentUser} from '../../store/selectors/current-user.selector';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent extends AutoUnsibscribeService implements OnInit, OnDestroy {

  @Input('productId')
  private productId: string;
  @select(fetchCommentsIsLoading)
  private isLoading: Observable<boolean>;
  private commentForm: FormGroup;
  private comments: Comment[];
  private isComments = false;
  private displayedColumns: string[] = ['User', 'Text'];

  constructor(private fb: FormBuilder,
              private ngRedux: NgRedux<AppState>) {
    super();
  }

  ngOnInit(): void {
    this.ngRedux.dispatch(fetchCommentsAction(this.productId));
    this.isLoading.subscribe(result => {
      if(!result) {
        this.comments = fetchComments(this.ngRedux.getState());
        if(this.comments.length != 0) {
          this.isComments = true;
        }
      }
    });

    this.commentForm = this.fb.group({
      commentText: ['']
    });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  private onSaveClick() {
    const saveComment = {
      id: null,
      comment: this.commentForm.controls['commentText'].value,
      owner: selectCurrentUser(this.ngRedux.getState()),
      product: selectCurrentProduct(this.ngRedux.getState())
    };
    console.log(saveComment);
    this.ngRedux.dispatch(saveCommentAction(saveComment));
  }

}
