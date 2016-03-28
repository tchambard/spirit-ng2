import { Component } from 'angular2/core';
import { Router, ROUTER_DIRECTIVES } from 'angular2/router';

import './sidebar.css';

@Component({
	selector: 'team-sidebar',
	template: require("./sidebar.html"),
	directives: [ROUTER_DIRECTIVES]
})

export class TeamSidebar {
	constructor(public router: Router) { }

}
