/* global describe it expect */

import passwordReducer from './password_reducer'
import { SET_PASSWORD } from '../constants/types'

describe('passwordReducer', () => {
  it('should return password when action type is SET_PASSWORD', () => {
    const action = {
      type: SET_PASSWORD,
      payload: 'pass'
    }
    expect(passwordReducer('', action)).toEqual('pass')
  })

  it('should return state when action type is not recognised', () => {
    const action = {
      type: 'NOT_RECOGNISED'
    }
    expect(passwordReducer('', action)).toEqual('')
  })
})
