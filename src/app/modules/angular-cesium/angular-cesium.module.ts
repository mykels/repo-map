import {NgModule} from '@angular/core';
import {ANGULAR_CESIUM_COMPONENTS} from './components';
import {ANGULAR_CESIUM_SERVICES} from './services';

@NgModule({
  imports: [],
  declarations: [
    ...ANGULAR_CESIUM_COMPONENTS
  ],
  providers: [
    ...ANGULAR_CESIUM_SERVICES
  ],
  exports: [
    ...ANGULAR_CESIUM_COMPONENTS
  ]
})
export class AngularCesiumModule {
}
