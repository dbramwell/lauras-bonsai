import { SET_LOGGED_IN } from '../constants/types'

export default function (state = false, action) {
  switch (action.type) {
    case SET_LOGGED_IN:
      return true
    default:
      return state
  }
}
