import { Component } from 'angular2/core';
import { Router, ROUTER_DIRECTIVES } from 'angular2/router';
import { Users } from '../../../services/api/users';

@Component({
	selector: 'navbar',
	template: require("./navbar.html"),
	directives: [ROUTER_DIRECTIVES]
})

export class NavbarComponent {
	userProfile: Object;
	constructor(private _service: Users, public router: Router) { }

	logout() {
		this._service.logout().subscribe(
	        res => {
	        	localStorage.removeItem('accessToken');
		        localStorage.removeItem('userProfile');
		        this.userProfile = null;
	        },
	        error => {
				localStorage.removeItem('accessToken');
		        localStorage.removeItem('userProfile');
		        this.userProfile = null;
	        	var msg = error.error && error.error.message;
				if (msg) {
					console.error("Logout error", msg);
				}
	        }
	  	);
	}

	getUserProfile() {
		var storedUp = localStorage.getItem('userProfile');
		if (storedUp) {
			this.userProfile = JSON.parse(storedUp);
		}
		return this.userProfile;
	}
}
