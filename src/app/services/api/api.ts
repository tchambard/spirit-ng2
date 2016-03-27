import {CONST_EXPR} from 'angular2/src/facade/lang';

import {Users} from './users';


// Expose the whole API through API_PROVIDERS
export const API_PROVIDERS: any[] = CONST_EXPR([Users]);
