import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {CarouselComponent} from './carousel';

@Component({
  selector: 'home',
  directives: [...FORM_DIRECTIVES, CarouselComponent],
  pipes: [],
  styles: [],
  template: require("./home.html"),
})

export class HomeComponent {

}
