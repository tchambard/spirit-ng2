import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from 'angular2/testing';
import { Users } from '../../services/api/users';

describe('Api Service', () => {

  beforeEachProviders(() => [Users]);

  it('should ...', inject([Users], (users:Users) => {
    expect(users.apiUrl).toBe('http://localhost:3000/api');
  }));

});
