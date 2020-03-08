import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {MenuComponent} from './components/menu/menu.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {UserService} from './services/user.service';
import {RoleService} from './services/role.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ProductPageComponent} from './components/product-page/product-page.component';
import {ProductService} from './services/product.service';
import {ProductImageService} from './services/utils/product-image-service';
import {DevToolsExtension, NgRedux, NgReduxModule} from '@angular-redux/store';
import {AppState} from './store';
import {NgReduxRouter, NgReduxRouterModule} from '@angular-redux/router';
import {EpicService} from './store/epics/epic.service';
import {GlobalUserStorageService} from './services/global-storage.service';
import {createEpicMiddleware} from 'redux-observable';
import {reducers} from './store/reducers/reducers';
import {createLogger} from 'redux-logger';
import {EpicsModule} from './store/epics/epics.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AutoUnsibscribeService} from './services/auto-unsibscribe.service';
import {DialogsModule} from './components/dialogs/dialogs.module';
import {AuthService} from './services/auth.service';
import {JwtInterceptor} from './services/jwt.interceptor';
import {DetailsMenuComponent} from './components/details-menu/details-menu.component';
import {AuthGuardService} from './services/auth-guard.service';
import {JwtModule, JwtModuleOptions} from '@auth0/angular-jwt';
import {CommentsComponent} from './components/comments/comments.component';
import {CommentService} from './services/comment.service';
import {CartComponent} from './components/cart/cart.component';
import {SalesOrderService} from './services/sales-order.service';
import {MenuCategoryService} from './services/menu-category.service';
import {MatConfirmDialogComponent} from './components/dialogs/mat-confirmation-dialog/mat-confirm-dialog.component';
import {MatConfirmDialogService} from './components/dialogs/mat-confirmation-dialog/mat-confirm-dialog.service';
import {MatDialogModule} from '@angular/material/dialog';
import {RecaptchaModule} from 'angular-google-recaptcha';

const JWT_Module_Options: JwtModuleOptions = {
  config: {
    tokenGetter: () => localStorage.getItem('currentToken'),
    whitelistedDomains: ['localhost:4200/menu']
  }
};

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MenuComponent,
    ProductPageComponent,
    DetailsMenuComponent,
    CommentsComponent,
    CartComponent,
    MatConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    EpicsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgReduxModule,
    NgReduxRouterModule.forRoot(),
    DialogsModule,
    MatDialogModule,
    JwtModule.forRoot(JWT_Module_Options),
    BrowserModule,
    RecaptchaModule.forRoot({
      siteKey: '6Lczb94UAAAAABtv704SAiRnAY3g1XUMHpl-X3P4'
    })
  ],
  providers: [
    UserService,
    RoleService,
    ProductService,
    ProductImageService,
    AutoUnsibscribeService,
    EpicService,
    AuthService,
    GlobalUserStorageService,
    AuthGuardService,
    CommentService,
    SalesOrderService,
    MenuCategoryService,
    MatConfirmDialogService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent],
  entryComponents: [MatConfirmDialogComponent]
})
export class AppModule {

  constructor(private ngRedux: NgRedux<AppState>,
              private ngReduxRouter: NgReduxRouter,
              private epicService: EpicService,
              private devTools: DevToolsExtension,
              private localStorageService: GlobalUserStorageService) {
    const epics = this.epicService.getEpics();
    const middleware = createEpicMiddleware();
    let enhancers = [];
    if (devTools.isEnabled()) {
      enhancers = [devTools.enhancer()];
    }

    const currentUser = localStorageService.currentUser;
    const INITIAL_STATE: AppState = {currentUser} as AppState;

    ngRedux.configureStore(reducers, INITIAL_STATE, [middleware, createLogger()], enhancers);
    middleware.run(epics as any);
    ngReduxRouter.initialize(state => state.route);
  }
}
