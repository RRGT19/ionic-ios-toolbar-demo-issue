import {NgModule} from '@angular/core';
import {SecondPageRoutingModule} from './second-routing.module';
import {SecondPage} from './second.page';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SecondPageRoutingModule,
    SharedModule
  ],
  declarations: [SecondPage]
})
export class SecondPageModule {
}
