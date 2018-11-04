/* global describe it expect */

import setEmail from './set_email'

describe('setEmail', () => {
  it('should create an action to setEmail', () => {
    const expectedAction = {
      type: 'SET_EMAIL',
      payload: 'email'
    }
    expect(setEmail('email')).toEqual(expectedAction)
  })
})
