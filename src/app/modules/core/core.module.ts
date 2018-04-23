import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CoreRoutingModule} from './core.routing';
import {AngularCesiumModule} from '../angular-cesium/angular-cesium.module';

@NgModule({
  imports: [
    CoreRoutingModule,
    AngularCesiumModule
  ],
  declarations: [],
  providers: [],
  exports: [
    RouterModule,
    AngularCesiumModule
  ]
})
export class CoreModule {
}
