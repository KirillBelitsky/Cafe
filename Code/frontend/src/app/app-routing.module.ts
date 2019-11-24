import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MenuComponent} from './components/menu/menu.component';
import {ProductPageComponent} from './components/product-page/product-page.component';
import {DetailsMenuComponent} from './components/details-menu/details-menu.component';
import {AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'products/:id', component: ProductPageComponent, canActivate: [AuthGuardService] },
  { path: 'menu/:id', component: DetailsMenuComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
