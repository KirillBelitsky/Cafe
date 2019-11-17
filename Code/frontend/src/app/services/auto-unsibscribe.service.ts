import {Subject} from 'rxjs';

export class AutoUnsibscribeService {

  protected streamEndSubject = new Subject();

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    this.streamEndSubject.next();
    this.streamEndSubject.complete();
  }
}
