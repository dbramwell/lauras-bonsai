import { put, call } from 'redux-saga/effects'
import { login as loginApi } from '../api/login'
import setLoggedIn from '../actions/set_logged_in'
import showLoginError from '../actions/show_login_error'

export default function * login (action) {
  try {
    const response = yield call(loginApi, action.payload.email, action.payload.password)
    yield call([response, response.json])
    yield put(setLoggedIn())
  } catch (e) {
    yield put(showLoginError(e.message))
  }
}
