import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {RoleService} from '../../services/role.service';
import {AutoUnsibscribeService} from '../../services/auto-unsibscribe.service';

@Component({
  selector: 'app-details-menu',
  templateUrl: './details-menu.component.html',
  styleUrls: ['./details-menu.component.css']
})
export class DetailsMenuComponent extends AutoUnsibscribeService implements OnInit, OnDestroy {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
