import {Component} from '@angular/core';

import {AutoCompleteOptions} from 'ionic4-auto-complete';

import {SimpleService} from '../../services/simple-service.service';

@Component({
  selector:    'custom-template',
  templateUrl: 'custom-template.component.html',
  styleUrls: [
    'custom-template.component.scss'
  ]
})
export class CustomTemplateComponent {
  public options:AutoCompleteOptions;

  public selected:string[] = [];

  constructor(
      public provider:SimpleService
  ) {
    this.options = new AutoCompleteOptions();

    this.options.autocomplete = 'on';
    this.options.debounce = 750;
    this.options.placeholder = 'Type text to search..';
    this.options.type = 'add-friend.svg';
  }

  on(output, event):void {
    console.log(output);
    // console.log(event);
  }
}
