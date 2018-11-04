import { LOGIN } from '../constants/types'

function login (email, password) {
  return {
    type: LOGIN,
    payload: { email, password }
  }
}
export default login
