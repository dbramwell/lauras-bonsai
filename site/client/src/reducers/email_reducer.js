import { SET_EMAIL } from '../constants/types'

export default function (state = '', action) {
  switch (action.type) {
    case SET_EMAIL:
      return action.payload
    default:
      return state
  }
}
