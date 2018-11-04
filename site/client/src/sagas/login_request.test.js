/* global describe it expect */

import loginRequest from './login_request'
import login from './login'
import { takeEvery } from 'redux-saga/effects'
import { LOGIN } from '../constants/types'

describe('loginRequest saga', () => {
  const gen = loginRequest()

  it('login_request should fork to login', () => {
    expect(gen.next().value).toEqual(takeEvery(LOGIN, login))
  })
})
