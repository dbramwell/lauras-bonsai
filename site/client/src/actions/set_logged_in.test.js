/* global describe it expect */

import setLoggedIn from './set_logged_in'

describe('setLoggedIn', () => {
  it('should create an action to setLoggedIn', () => {
    const expectedAction = {
      type: 'SET_LOGGED_IN',
      payload: true
    }
    expect(setLoggedIn()).toEqual(expectedAction)
  })
})
