import { Auth } from 'aws-amplify'

export const login = (username, password) => Auth.signIn(username, password)
