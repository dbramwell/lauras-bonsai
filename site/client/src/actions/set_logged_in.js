import { SET_LOGGED_IN } from '../constants/types'

function setLoggedIn () {
  return {
    type: SET_LOGGED_IN,
    payload: true
  }
}
export default setLoggedIn
