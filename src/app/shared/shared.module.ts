import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomToolbarComponent} from './custom-toolbar/custom-toolbar.component';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

@NgModule({
  declarations: [
    CustomToolbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    IonicModule,
    CommonModule,
    CustomToolbarComponent
  ]
})
export class SharedModule {
}
