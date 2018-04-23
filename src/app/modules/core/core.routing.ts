import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MasterComponent} from '../master/master.component';

const routes: Routes = [
  {
    path: '',
    component: MasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {
}
