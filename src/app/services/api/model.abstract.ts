import {Injectable} from 'angular2/core';
import { Headers, RequestOptions, Response } from 'angular2/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class Model {

    constructor() {
  		this._headers = new Headers();
		this._headers.append('Accept', 'application/json');
		this._headers.append('Content-Type', 'application/json');
  	}

	apiUrl: string = 'http://localhost:3000/api';

	private _headers: Headers;

  	protected handleError(error: Response) {
	    // in a real world app, we may send the error to some remote logging infrastructure
	    // instead of just logging it to the console
	    console.error(error);
	    var e = error && error.json && typeof error.json === "function" ? error.json() : error;
	    return Observable.throw(e.json()) || 'Server error';
	}

	protected getRequestOptions() {
		var accessToken = localStorage.getItem('accessToken');
		if (!this._headers.has("Authorization")) {
		 	if (accessToken) {
		 		this._headers.append('Authorization', accessToken);
		 	}
		} else {
			if (!accessToken) {
				this._headers.delete('Authorization');
			}
		}
		return new RequestOptions({ headers: this._headers });
	}
}
