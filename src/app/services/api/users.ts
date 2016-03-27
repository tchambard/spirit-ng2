import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';

import { Model } from './model.abstract';


@Injectable()
export class Users extends Model {
	constructor (private http: Http) {
		super();
	}

	private url = this.apiUrl + '/users';

	login(username, password) {
		let body = JSON.stringify({username: username, password: password});
    	return this.http.post(this.url + '/login', body, this.getRequestOptions())
			.map(res => res.json())
            .catch(this.handleError.bind(this));
  	}

  	logout() {
    	return this.http.post(this.url + '/logout', "{}", this.getRequestOptions())
			.map(res => {
				return res.statusText;
			})
			.catch(this.handleError.bind(this));
  	}

  	userProfile(userId) {
    	return this.http.get(this.url + '/' + userId + '?filter[include]=teams&filter[include]=roles', this.getRequestOptions())
			.map(res => res.json())
            .catch(this.handleError.bind(this));
  	}
}
