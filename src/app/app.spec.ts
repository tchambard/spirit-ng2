import {
  it,
  inject,
  injectAsync,
  beforeEachProviders,
  TestComponentBuilder,
} from 'angular2/testing';

// to use Translate Service, we need Http, and to test Http we need to mock the backend
import {BaseRequestOptions, Http, Response, ResponseOptions} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
import {provide} from "angular2/core";

// Load the implementations that should be tested
import {Users} from './services/api/users';
import {App} from './app';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    App,
    Users,
    BaseRequestOptions,
    MockBackend,
    // Provide a mocked (fake) backend for Http
    provide(Http, {
      useFactory: function useFactory(backend, defaultOptions) {
        return new Http(backend, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    })
  ]);

  it('should have an url', inject([Users], (app:App) => {
    expect(app.title).toEqual('Spirit');
  }));

});
