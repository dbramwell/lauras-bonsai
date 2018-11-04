import { SET_PASSWORD } from '../constants/types'

function setPassword (password) {
  return {
    type: SET_PASSWORD,
    payload: password
  }
}
export default setPassword
