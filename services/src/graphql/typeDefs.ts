import { gql } from "apollo-server";
// THIS IS PRETTY MUCH LIKE AN INTERFACE, DATA SCHEMA, DECLARES WHICH MUTATIONS WE USE, AND WHAT DO THEY USE
const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String
  }
  type Query {
    users: [User!]!
  }
  type Mutation {
    createUser(
      email: String!,
      firstName: String!,
      lastName: String!,
      password: String!
    ): User!
    loginUser(
      email: String!,
      password: String
    ): User
  }
`;
export default typeDefs;
