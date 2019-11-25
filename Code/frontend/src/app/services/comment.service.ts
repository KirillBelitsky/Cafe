import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Comment} from '../models/comment.model';
import {catchError} from 'rxjs/operators';

@Injectable()
export class CommentService {

  private COMMENT_URL = '/api/comments';

  constructor(private httpClient: HttpClient){
  }

  public getCommentsByProductId(id: string): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(`${this.COMMENT_URL}?productId=${id}`)
      .pipe(catchError((error: any) => throwError(error.error)));
  }

}
