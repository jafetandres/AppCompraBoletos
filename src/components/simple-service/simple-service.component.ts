import {Component, ViewChild} from '@angular/core';

import {AutoCompleteOptions, AutoCompleteComponent} from 'ionic4-auto-complete';

import {SimpleService} from '../../services/simple-service.service';



@Component({
  selector:    'simple-service',
  templateUrl: 'simple-service.component.html',
  styleUrls: [
    'simple-service.component.scss'
  ]
})


export class SimpleServiceComponent {
  @ViewChild('searchbar',{static: false})
  searchbar: AutoCompleteComponent;
  public options:AutoCompleteOptions;

  public selected:string = '';

  constructor(
    public provider:SimpleService
  ) {
    this.options = new AutoCompleteOptions();

    this.options.autocomplete = 'on';
    this.options.debounce = 750;
    this.options.placeholder = 'Search';
    this.options.type = 'add-friend.svg';
  }

  random():void {
    this.provider.getResults().subscribe(
      (results) => {
        const count = results.length;

        this.selected = results[Math.round(Math.random() * count)]
      }
    );
  }

  on(itemSelected, event):void {
    
    console.log(this.searchbar.getSelection());
    

    

    // console.log(event);
  }


  
}
