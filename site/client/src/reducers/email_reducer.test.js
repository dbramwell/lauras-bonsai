/* global describe it expect */

import emailReducer from './email_reducer'
import { SET_EMAIL } from '../constants/types'

describe('emailReducer', () => {
  it('should return email when action type is SET_EMAIL', () => {
    const action = {
      type: SET_EMAIL,
      payload: 'user'
    }
    expect(emailReducer('', action)).toEqual('user')
  })

  it('should return state when action type is not recognised', () => {
    const action = {
      type: 'NOT_RECOGNISED'
    }
    expect(emailReducer('', action)).toEqual('')
  })
})
