import { SET_EMAIL } from '../constants/types'

function setEmail (email) {
  return {
    type: SET_EMAIL,
    payload: email
  }
}
export default setEmail
