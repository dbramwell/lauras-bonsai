/* global describe it expect */

import setPassword from './set_password'

describe('setPassword', () => {
  it('should create an action to setPassword', () => {
    const expectedAction = {
      type: 'SET_PASSWORD',
      payload: 'password'
    }
    expect(setPassword('password')).toEqual(expectedAction)
  })
})
