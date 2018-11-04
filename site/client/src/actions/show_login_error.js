import { SHOW_LOGIN_ERROR } from '../constants/types'

function showLoginError (error) {
  return {
    type: SHOW_LOGIN_ERROR,
    payload: error
  }
}
export default showLoginError
