/* global describe it expect */

import showLoginError from './show_login_error'

describe('showLoginError', () => {
  it('should create an action to showLoginError', () => {
    const expectedAction = {
      type: 'SHOW_LOGIN_ERROR',
      payload: 'There was an error'
    }
    expect(showLoginError('There was an error')).toEqual(expectedAction)
  })
})
