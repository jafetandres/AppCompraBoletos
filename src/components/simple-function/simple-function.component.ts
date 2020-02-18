import {Component} from '@angular/core';

import {AutoCompleteOptions} from 'ionic4-auto-complete';

import {SimpleFunction} from '../../services/simple-function.service';

@Component({
  selector:    'simple-function',
  templateUrl: 'simple-function.component.html',
  styleUrls: [
    'simple-function.component.scss'
  ]
})
export class SimpleFunctionComponent {
  public options:AutoCompleteOptions;

  public selected:string = '';

  constructor(
      public provider:SimpleFunction
  ) {
    this.options = new AutoCompleteOptions();

    this.options.autocomplete = 'on';
    this.options.cancelButtonIcon = 'assets/icon/clear.svg';
    this.options.clearIcon = 'assets/icon/clear.svg';
    this.options.debounce = 10;
    this.options.placeholder = 'Desde....';
    this.options.searchIcon = 'assets/icon/add-user.svg';
    this.options.type = 'search';
  }

  on(output, event):void {
    console.log(output);
    // console.log(event);
  }
}
