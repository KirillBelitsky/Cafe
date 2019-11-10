import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {RoleService} from '../../services/role.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private userService: UserService,
              private roleService: RoleService) { }

  ngOnInit() {
  }

  onClick(): void {
    this.roleService.getRoleById('0e2da4be-1a7b-43cc-a65b-d32865c40f34').subscribe(value => {
      console.log(value);
    });
  }

}
