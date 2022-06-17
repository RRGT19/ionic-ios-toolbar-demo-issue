import {NgModule} from '@angular/core';
import {FirstPageRoutingModule} from './first-routing.module';
import {FirstPage} from './first.page';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    FirstPageRoutingModule,
    SharedModule
  ],
  declarations: [FirstPage]
})
export class FirstPageModule {
}
