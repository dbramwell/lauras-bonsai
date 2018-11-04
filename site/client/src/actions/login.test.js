/* global describe it expect */

import login from './login'

describe('login', () => {
  it('should create an action to login with email and password', () => {
    const expectedAction = {
      type: 'LOGIN',
      payload: { email: 'email', password: 'password' }
    }
    expect(login('email', 'password')).toEqual(expectedAction)
  })
})
