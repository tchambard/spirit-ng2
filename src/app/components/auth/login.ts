import { Component, View } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { Users } from '../../services/api/users';

@Component({
  selector: 'login'
})
@View({
  directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES ],
  template: require('./login.html')
})
export class Login {

  constructor(private _service: Users, public router: Router) { }

  login(event, username, password) {
  	event.preventDefault();
  	this._service.login(username, password).subscribe(
        res => {
          localStorage.setItem('accessToken', res.id);
          this._service.userProfile(res.userId).subscribe(
        	up => {
        		localStorage.setItem('userProfile', JSON.stringify(up));
        		this.router.parent.navigateByUrl('/team');
        	},
        	err => {
        	    console.error(err.message);
        	}
          );
        },
        error => {
          console.log(error);
        }
  	);
  }
}
