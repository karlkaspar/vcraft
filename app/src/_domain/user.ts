
export interface AppState {
  loggedIn: boolean,
  user: User
}

export interface User {
  email: string,
  firstName: string,
  lastName: string,
  password: string
}

export default AppState
