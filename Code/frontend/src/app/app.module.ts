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
import {ProductImageService} from './utils/product-image-service';
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
import {JwtHelperService, JwtModule, JwtModuleOptions} from '@auth0/angular-jwt';

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
    DetailsMenuComponent
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
    JwtModule.forRoot(JWT_Module_Options),
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
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
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
