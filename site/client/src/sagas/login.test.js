/* global describe it expect */
import login from './login'
import { call, put } from 'redux-saga/effects'
import { login as loginApi } from '../api/login'
import showLoginError from '../actions/show_login_error'
import setLoggedIn from '../actions/set_logged_in'

const action = { payload: { email: 'email', password: 'password' } }

describe('login saga', () => {
  const gen = login(action)

  it('login should call loginApi', () => {
    expect(gen.next().value).toEqual(call(loginApi, action.payload.email, action.payload.password))
  })

  it('login should return json from fetch response', () => {
    const response = { json: () => {
      return { UserAttributes: [{ Name: 'email', Value: 'email' }] }
    } }
    expect(gen.next(response).value).toEqual(call([response, response.json]))
  })

  it('login should call action to set loggedIn', () => {
    expect(gen.next().value).toEqual(put(setLoggedIn(true)))
  })
})

describe('login saga failed login', () => {
  const gen = login(action)

  it('should have called the API first', () => {
    expect(gen.next().value).toEqual(call(loginApi, action.payload.email, action.payload.password))
  })

  it('and then trigger showLoginError with the error message', () => {
    expect(gen.throw({ message: 'error!' }).value).toEqual(put(showLoginError('error!')))
  })
})
