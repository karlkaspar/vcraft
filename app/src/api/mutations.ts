import { gql } from "apollo-boost";

export const registerMutation = gql`
  mutation($email: String!, $firstName: String!, $lastName: String!, $password: String!) {
    createUser(email: $email, firstName: $firstName, lastName: $lastName, password: $password) {
      id
      email,
      firstName,
      lastName,
      password
    }
  }
`;

export const loginMutation = gql`
  mutation($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      id
      email,
      password
    }
  }
`;
