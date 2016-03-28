import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, RouterOutlet } from 'angular2/router';
import { Login } from './login';

import './auth.css';

@Component({
  template:  `
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES, RouterOutlet],
  providers:  []
})
@RouteConfig([
	{ path: '/', name: 'Login', component: Login, useAsDefault: true },
	{ path: '/login', name: 'Login', component: Login }
])
export class Auth {}
