/* global describe it expect */

import loggedInReducer from './logged_in_reducer'
import { SET_LOGGED_IN } from '../constants/types'

describe('loggedInReducer', () => {
  it('should return true when action type is SET_LOGGED_IN', () => {
    const action = {
      type: SET_LOGGED_IN
    }
    expect(loggedInReducer(false, action)).toEqual(true)
  })

  it('should return state when action type is not recognised', () => {
    const action = {
      type: 'NOT_RECOGNISED'
    }
    expect(loggedInReducer(false, action)).toEqual(false)
  })
})
