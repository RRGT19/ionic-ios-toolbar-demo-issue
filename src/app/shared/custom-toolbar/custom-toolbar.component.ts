import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'app-custom-toolbar',
  templateUrl: './custom-toolbar.component.html',
  styleUrls: ['./custom-toolbar.component.scss'],
})
export class CustomToolbarComponent {

  @Input() @HostBinding('class.dark-mode')
  darkMode: boolean;

}
