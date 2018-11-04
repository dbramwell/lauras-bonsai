
import { takeEvery } from 'redux-saga/effects'
import { LOGIN } from '../constants/types'
import login from './login'

export default function * requestBuilds () {
  yield takeEvery(LOGIN, login)
}
