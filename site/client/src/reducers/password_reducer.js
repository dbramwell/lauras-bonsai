import { SET_PASSWORD } from '../constants/types'

export default function (state = '', action) {
  switch (action.type) {
    case SET_PASSWORD:
      return action.payload
    default:
      return state
  }
}
