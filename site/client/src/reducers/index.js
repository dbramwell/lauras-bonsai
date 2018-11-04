import { combineReducers } from 'redux'
import PasswordReducer from './password_reducer'
import EmailReducer from './email_reducer'
import LoggedInReducer from './logged_in_reducer'

const rootReducer = combineReducers({
  password: PasswordReducer,
  email: EmailReducer,
  loggedIn: LoggedInReducer
})
export default rootReducer
