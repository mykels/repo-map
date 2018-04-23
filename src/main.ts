import {environment} from './environments/environment';
import {AppModule} from './app/app.module';
import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

if (environment.production) {
  enableProdMode();
}

window['CESIUM_BASE_URL'] = '/assets/cesium';

platformBrowserDynamic().bootstrapModule(AppModule);
