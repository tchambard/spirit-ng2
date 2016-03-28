import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {TeamSidebar} from './layout/sidebar';

import './team.css';

@Component({
  selector: 'team',
  pipes: [],
  styles: [require('./team.scss')],
  template: require('./team.html'),
  directives: [...ROUTER_DIRECTIVES, TeamSidebar]
  
})
export class Team implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Team');
  }

}
