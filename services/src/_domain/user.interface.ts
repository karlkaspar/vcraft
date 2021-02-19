export interface User {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  password: string
}

// CREATING THREE INTERFACES FOR DIFFERENT PIECES OF THE SAME THING MIGHT BE REDUNDANT

export interface LoginCredentials {
  email: string,
  password: string
}

export interface RegisterCredentials {
  firstName: string,
  lastName: string,
  email: string,
  password: string
}
