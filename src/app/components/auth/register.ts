import { Component, View } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { Http } from 'angular2/http';

@Component({
  selector: 'login'
})
@View({
  directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES ],
  template: require('./register.html')
})
export class Login {
  
  constructor(public router: Router, public http: Http) {
  }



  signup(event) {
    event.preventDefault();
    this.router.parent.navigateByUrl('/signup');
  }
}